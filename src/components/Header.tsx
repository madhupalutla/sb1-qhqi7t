import React from 'react';
import { Brain, TrendingUp } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8" />
            <span className="text-2xl font-bold">FinanceAI</span>
          </div>
          <div className="flex items-center gap-4">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-medium">Smart Financial Recommendations</span>
          </div>
        </div>
      </div>
    </header>
  );
}