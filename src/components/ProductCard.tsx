import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  risk: string;
  returns: string;
  recommended: boolean;
}

export default function ProductCard({
  title,
  description,
  features,
  risk,
  returns,
  recommended,
}: ProductCardProps) {
  return (
    <div className={`rounded-lg border ${recommended ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} p-6 shadow-sm transition-all hover:shadow-md`}>
      {recommended && (
        <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
          Recommended
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      
      <div className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500">Risk Level:</span>
          <p className="font-medium text-gray-900">{risk}</p>
        </div>
        <div>
          <span className="text-gray-500">Expected Returns:</span>
          <p className="font-medium text-gray-900">{returns}</p>
        </div>
      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm ring-1 ring-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Learn More
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}