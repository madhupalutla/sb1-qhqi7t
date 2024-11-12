import React, { useState } from 'react';
import Header from './components/Header';
import RecommendationForm from './components/RecommendationForm';
import ProductCard from './components/ProductCard';

function App() {
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const generateRecommendations = (data: any) => {
    // In a real app, this would call an AI model API
    const products = [
      {
        title: "Growth Index Fund",
        description: "A diversified portfolio of high-growth stocks for long-term wealth building.",
        features: [
          "Low management fees",
          "Automatic rebalancing",
          "Broad market exposure"
        ],
        risk: "Moderate-High",
        returns: "8-12% annually",
        recommended: data.riskTolerance === "aggressive"
      },
      {
        title: "Balanced Retirement Portfolio",
        description: "A mix of stocks and bonds designed for stable, long-term growth.",
        features: [
          "Regular dividend payments",
          "Tax-efficient structure",
          "Professional management"
        ],
        risk: "Moderate",
        returns: "6-8% annually",
        recommended: data.riskTolerance === "moderate"
      },
      {
        title: "Capital Preservation Fund",
        description: "Focus on protecting your principal while generating steady income.",
        features: [
          "High-grade bonds",
          "Monthly income distributions",
          "Low volatility"
        ],
        risk: "Low",
        returns: "3-5% annually",
        recommended: data.riskTolerance === "conservative"
      }
    ];

    setRecommendations(products);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[400px,1fr]">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Financial Profile</h2>
            <RecommendationForm onSubmit={generateRecommendations} />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {recommendations.length > 0 ? 'Recommended Products' : 'Complete your profile to get personalized recommendations'}
            </h2>
            
            {recommendations.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recommendations.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <img
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800"
                  alt="Financial Planning"
                  className="mx-auto mb-6 rounded-lg w-full max-w-md object-cover"
                />
                <p className="text-gray-600">
                  Fill out your profile to receive AI-powered financial product recommendations tailored to your needs and goals.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;