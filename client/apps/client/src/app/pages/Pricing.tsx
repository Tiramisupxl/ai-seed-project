
import { useState } from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  
  const features = [
    "Unlimited script generations",
    "Video-to-script conversion",
    "Custom tone and style",
    "Multiple export formats",
    "Script templates",
    "Priority support"
  ];
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-brand-700 max-w-2xl mx-auto">
          Choose the plan that's right for you and start creating viral video scripts today
        </p>
        
        <div className="inline-flex items-center mt-8 p-1 bg-gray-100 rounded-lg">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
              billingCycle === 'monthly' 
                ? 'bg-white shadow-sm text-brand-900' 
                : 'text-brand-600 hover:text-brand-800'
            }`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
              billingCycle === 'yearly' 
                ? 'bg-white shadow-sm text-brand-900' 
                : 'text-brand-600 hover:text-brand-800'
            }`}
          >
            Yearly billing
            <span className="ml-2 bg-success-100 text-success-800 text-xs px-2 py-0.5 rounded-full">
              SAVE 50%
            </span>
          </button>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="p-8 text-center border-b border-gray-100">
            <h2 className="text-2xl font-bold text-brand-900 mb-2">
              {billingCycle === 'yearly' ? '$10 / month' : '$20 / month'}
            </h2>
            <p className="text-brand-700">
              {billingCycle === 'yearly' 
                ? 'Billed annually ($120 / year)' 
                : 'Billed monthly ($20 / month)'
              }
            </p>
          </div>
          
          <div className="p-8">
            <h3 className="text-lg font-semibold text-brand-900 mb-4">
              Everything you need to create viral content
            </h3>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check size={20} className="text-success-500 shrink-0 mt-0.5 mr-3" />
                  <span className="text-brand-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 bg-black text-white rounded-md font-medium hover:bg-black/90 transition-all">
              Get Started Now
            </button>
          </div>
          
          <div className="p-8 bg-gray-50 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-brand-900 mb-4">
              Free plan includes:
            </h3>
            
            <ul>
              <li className="flex items-start mb-3">
                <Check size={20} className="text-success-500 shrink-0 mt-0.5 mr-3" />
                <span className="text-brand-700">3 free script generations daily</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-success-500 shrink-0 mt-0.5 mr-3" />
                <span className="text-brand-700">Basic export options</span>
              </li>
            </ul>
          </div>
        </div>
        
        <p className="text-center text-brand-600 mt-8">
          All plans come with a 14-day money-back guarantee. No commitment required.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
