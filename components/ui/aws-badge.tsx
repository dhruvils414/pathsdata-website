import Image from 'next/image';

export const AWSPartnerBadge = () => (
  <div className="inline-flex items-center gap-4 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl">
    <Image 
      src="/aws-partner-badge.png" 
      alt="AWS Select Tier Services Partner" 
      width={80} 
      height={80}
      className="h-16 w-auto"
    />
    <div>
      <p className="text-white text-xl font-bold">AWS Select Tier Consulting Partner</p>
      <p className="text-slate-400 text-sm">Amazon Web Services Partner Network</p>
    </div>
  </div>
);

export const AWSPartnerBadgeLarge = AWSPartnerBadge;
