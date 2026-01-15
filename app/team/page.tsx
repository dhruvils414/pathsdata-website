import { Linkedin } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';

export const metadata = {
  title: 'Our Team - PATHSDATA',
  description: 'Meet the PATHSDATA team - experts in AI, Data Engineering, and Cloud Solutions.',
};

const teamMembers = [
  {
    name: 'Dhruvil Patel',
    role: 'Founder & CEO',
    bio: 'AWS certified solutions architect with 10+ years of experience in data engineering and AI/ML. Passionate about helping businesses leverage cloud technologies for growth.',
    expertise: ['AWS Architecture', 'Data Engineering', 'AI/ML Strategy', 'Cloud Migration'],
    linkedin: 'https://linkedin.com/in/dhruvil-patel',
  },
];

export default function TeamPage() {
  return (
    <div className="py-16 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-8 py-2 bg-slate-800/80 rounded-full text-slate-400 text-sm mb-4 border border-slate-700/50">
            Our Team
          </span>
          <h1 className="text-3xl font-bold text-white mb-2">
            Meet the <GradientText>Experts</GradientText>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our team brings together deep expertise in AWS, AI/ML, and data engineering to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-8 bg-slate-900/60 border border-slate-800/60 rounded-xl"
            >
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center border border-violet-500/30">
                  <span className="text-3xl font-bold text-violet-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-white">{member.name}</h2>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-violet-400"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-violet-400 text-base mb-3">{member.role}</p>
                  <p className="text-slate-400 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800/60 text-slate-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-white mb-4">Want to Join Our Team?</h3>
          <p className="text-slate-400 mb-6">
            We&apos;re always looking for talented individuals passionate about AI and cloud technologies.
          </p>
          <GradientButton href="/contact">Get in Touch</GradientButton>
        </div>
      </div>
    </div>
  );
}
