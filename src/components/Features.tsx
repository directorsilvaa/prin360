import React from 'react';
import { Globe, Code, Share2 } from 'lucide-react';

export default function Features() {
  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-16 leading-tight">
          All Of Your Deployments<br className="hidden sm:block" />In One Place
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard
            icon={<Globe className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />}
            title="Remain In Flow"
            description="While Coding"
          />
          <FeatureCard
            icon={<Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />}
            title="Roll Out Commits"
            description="To Your Team"
          />
          <FeatureCard
            icon={<Share2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />}
            title="Accelerate"
            description="Development"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400">{description}</p>
    </div>
  );
}