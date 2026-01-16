import json
import boto3
import uuid
import os
from datetime import datetime, timezone

# Initialize AWS clients
dynamodb = boto3.resource("dynamodb")
ses = boto3.client("ses")

# Environment Variables
TABLE_NAME = os.getenv("CONTACT_TABLE_NAME")
SENDER_EMAIL_ID = os.getenv("SENDER_EMAIL_ID")
ADMIN_EMAIL_ID = os.getenv("ADMIN_EMAIL_ID")
ORG_NAME = "PATHSDATA"
ORG_WEBSITE = "https://www.pathsdata.com"

# CORS Headers
CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Allow-Headers": "Content-Type"
}

# Interest options mapping for display
INTEREST_LABELS = {
    "data-engineering": "Data Engineering",
    "ai-ml": "AI & Machine Learning",
    "genai": "Generative AI",
    "bi": "Business Intelligence",
    "mlops": "MLOps",
    "cloud-migration": "Cloud Migration",
    "aws-poc": "AWS POC Program",
    "other": "Other"
}


def generate_response(status_code, message=None, data=None):
    """Generate a consistent API response format."""
    response_body = {"statusCode": status_code}
    
    if message:
        response_body["message"] = message
    
    if data is not None:
        response_body["data"] = data
    
    return {
        "statusCode": status_code,
        "body": json.dumps(response_body),
        "headers": CORS_HEADERS
    }


def get_current_timestamp():
    """Get current UTC timestamp in ISO format."""
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def lambda_handler(event, context):
    """Main Lambda handler for contact form submissions."""
    try:
        # Handle OPTIONS preflight request
        if event.get("httpMethod") == "OPTIONS":
            return generate_response(200, message="OK")
        
        print(f"Event: {json.dumps(event)}")
        
        # Parse request body
        body = json.loads(event.get("body", "{}"))
        print(f"Body: {json.dumps(body)}")

        # Extract data matching website form fields
        name = body.get("name", "").strip()
        email = body.get("email", "").strip()
        company = body.get("company", "").strip()
        interest = body.get("interest", "").strip()
        message = body.get("message", "").strip()

        # Validate required fields
        if not name or not email or not message:
            return generate_response(400, message="Missing required fields: name, email, and message are required.")

        # Validate email format
        if "@" not in email or "." not in email:
            return generate_response(400, message="Invalid email format.")

        # Generate unique ID
        contact_id = str(uuid.uuid4())

        # Get human-readable interest label
        interest_label = INTEREST_LABELS.get(interest, interest) if interest else "Not specified"

        # Store in DynamoDB
        if TABLE_NAME:
            table = dynamodb.Table(TABLE_NAME)
            table.put_item(
                Item={
                    "contact_id": contact_id,
                    "name": name,
                    "email": email,
                    "company": company if company else "Not provided",
                    "interest": interest if interest else "not-specified",
                    "interest_label": interest_label,
                    "message": message,
                    "created_at": get_current_timestamp(),
                    "status": "new"
                }
            )
            print(f"Saved to DynamoDB: {contact_id}")

        # Send notification email
        if SENDER_EMAIL_ID and ADMIN_EMAIL_ID:
            send_email(name, email, company, interest_label, message)
            print(f"Email sent to {ADMIN_EMAIL_ID}")

        return generate_response(200, message="Your message has been received. We'll get back to you soon.")

    except json.JSONDecodeError as e:
        print(f"Invalid JSON in request body: {str(e)}")
        return generate_response(400, message="Invalid request format.")
    except Exception as e:
        print(f"Error: {str(e)}")
        import traceback
        traceback.print_exc()
        return generate_response(500, message="Internal Server Error")


def send_email(name, email, company, interest, message):
    """Send a notification email via AWS SES."""
    
    # Email subject with interest area
    subject = f"📩 New Contact Inquiry - {name}" + (f" [{interest}]" if interest != "Not specified" else "")

    # Email body (HTML format)
    body_html = f"""
    <html>
    <head>
        <style>
            body {{
                font-family: Arial, sans-serif;
                background-color: #0a0f1c;
                padding: 20px;
                margin: 0;
            }}
            .container {{
                max-width: 600px;
                margin: 0 auto;
                background: #1e293b;
                padding: 30px;
                border-radius: 12px;
                border: 1px solid #334155;
            }}
            h2 {{
                color: #ffffff;
                border-bottom: 3px solid #8b5cf6;
                padding-bottom: 12px;
                margin-top: 0;
            }}
            .field-label {{
                font-size: 12px;
                color: #8b5cf6;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 4px;
            }}
            .field-value {{
                font-size: 16px;
                color: #ffffff;
                margin-bottom: 20px;
            }}
            .field-value a {{
                color: #a78bfa;
                text-decoration: none;
            }}
            .interest-badge {{
                display: inline-block;
                background: rgba(139, 92, 246, 0.2);
                color: #a78bfa;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 14px;
                border: 1px solid rgba(139, 92, 246, 0.3);
            }}
            .message-box {{
                background: #0f172a;
                border-left: 4px solid #8b5cf6;
                padding: 16px;
                border-radius: 0 8px 8px 0;
                color: #94a3b8;
                font-style: italic;
                line-height: 1.6;
            }}
            .footer {{
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #334155;
                font-size: 12px;
                text-align: center;
                color: #64748b;
            }}
            .footer a {{
                color: #8b5cf6;
                text-decoration: none;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <h2>🚀 New Contact Form Submission</h2>
            
            <div class="field-label">Name</div>
            <div class="field-value">{name}</div>
            
            <div class="field-label">Email</div>
            <div class="field-value"><a href="mailto:{email}">{email}</a></div>
            
            <div class="field-label">Company</div>
            <div class="field-value">{company if company else '<span style="color: #64748b;">Not provided</span>'}</div>
            
            <div class="field-label">Interest Area</div>
            <div class="field-value">
                <span class="interest-badge">{interest}</span>
            </div>
            
            <div class="field-label">Message</div>
            <div class="message-box">{message}</div>
            
            <div class="footer">
                This notification was sent automatically by {ORG_NAME}.<br>
                <a href="{ORG_WEBSITE}">{ORG_WEBSITE}</a>
            </div>
        </div>
    </body>
    </html>
    """

    # Email body (Plain Text fallback)
    body_text = f"""
NEW CONTACT FORM SUBMISSION
============================

Name: {name}
Email: {email}
Company: {company if company else "Not provided"}
Interest: {interest}

Message:
{message}

--
{ORG_NAME}
{ORG_WEBSITE}
    """

    ses.send_email(
        Source=SENDER_EMAIL_ID,
        Destination={"ToAddresses": [ADMIN_EMAIL_ID]},
        Message={
            "Subject": {"Data": subject},
            "Body": {
                "Text": {"Data": body_text},
                "Html": {"Data": body_html}
            }
        }
    )
