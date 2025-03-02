import { useState } from "react";
import { Link } from "react-router-dom";
import { Upload, ArrowRight, Sparkles, Zap, Clock, Check } from "lucide-react";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight">
              Create Viral Video Scripts
              <br className="hidden md:block" /> for Youtube and TikTok
            </h1>
            
            <p className="mt-6 text-xl text-brand-700 max-w-xl">
              The fastest way to create viral video is to learn
              how successful ones did before
            </p>
            
            <div className="mt-10 flex flex-col gap-4" style={{ width: '438px' }}>
              <Link
                to="/generate"
                className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-black/90 transition-all group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center text-2xl">
                    <span className="mr-2">G</span>
                    <span>Start for free</span>
                  </div>
                  <div className="text-sm text-brand-600 flex items-center mt-2" style={{ color: '#BBBBBB' }}>
                    3 free trials daily. No credit card required.
                  </div>
                </div>
              </Link>
              <div className="mt-2 text-center"> Unlimited Pricing</div>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="pricing-card w-full sm:w-auto">
                  <div className="font-bold text-2xl">$10 / monthly</div>
                  <div className="text-sm text-foreground/70">$120 billed yearly</div>
                  <div className="bg-black text-white text-sm px-2 py-1 rounded mt-2 inline-block">
                    SAVE 50%
                  </div>
                </div>
                
                <div className="text-lg font-medium">OR</div>
                
                <div className="pricing-card w-full sm:w-auto">
                  <div className="font-bold text-2xl">$20 / monthly</div>
                  <div className="text-sm text-foreground/70">$20 billed monthly</div>
                </div>
              </div>
              
            </div>

            
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl transition-all animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <img 
              src="public/lovable-uploads/819da5e5-d513-4430-a709-8e0513b0a0b7.png"
              alt="CopyScript interface" 
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
