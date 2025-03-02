
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FaqItem[] = [
    {
      question: "How does CopyScript work?",
      answer: "CopyScript uses advanced AI to analyze successful videos and generate custom scripts based on your specific needs. Simply upload a video or paste a URL, provide details about the content you want to create, and get a tailored script in seconds."
    },
    {
      question: "What kind of videos can I create scripts for?",
      answer: "CopyScript works for a wide range of video content including educational videos, product reviews, tutorials, entertainment, storytelling, and more. Our platform is designed to support various formats for platforms like YouTube, TikTok, Instagram, and other social media channels."
    },
    {
      question: "How many scripts can I generate with the free plan?",
      answer: "The free plan allows you to generate up to 3 scripts per day. If you need more, you can upgrade to our unlimited plan which provides unlimited script generations and additional features."
    },
    {
      question: "Can I customize the tone and style of the scripts?",
      answer: "Yes! When creating a script, you can specify your preferred tone, style, target audience, and other details. Our system will generate a script that matches your requirements while maintaining the engaging elements of successful videos."
    },
    {
      question: "In what formats can I export my scripts?",
      answer: "You can export your scripts in multiple formats including TXT, DOCX, and PDF. This makes it easy to use your scripts in different workflows and applications."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. We also offer a 14-day money-back guarantee if you're not satisfied with our service."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-brand-700 max-w-2xl mx-auto">
          Find answers to common questions about CopyScript and our services
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left"
              >
                <h3 className="text-lg font-medium text-brand-900">{item.question}</h3>
                <span className="ml-6 flex-shrink-0 text-brand-500">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-6 pb-4 text-brand-700 transition-all ${
                  openIndex === index ? 'block animate-fade-in' : 'hidden'
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-brand-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-brand-700 mb-6">
            We're here to help. Contact our support team for assistance.
          </p>
          <a 
            href="mailto:support@copyscript.com" 
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-black/90 transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
