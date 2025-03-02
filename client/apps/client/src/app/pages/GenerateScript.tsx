
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const GenerateScript = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [videoUrl, setVideoUrl] = useState("");
  const [scriptDetails, setScriptDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoSubmitted, setVideoSubmitted] = useState(false);
  const [detailsSubmitted, setDetailsSubmitted] = useState(false);
  
  const handleVideoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl.trim()) {
      toast.error("Please enter a valid video URL");
      return;
    }
    
    setVideoSubmitted(true);
    setTimeout(() => {
      setStep(2);
    }, 500);
  };
  
  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scriptDetails.trim()) {
      toast.error("Please provide details about your video");
      return;
    }
    
    setDetailsSubmitted(true);
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate("/scripts/1");
      toast.success("Script generated successfully!");
    }, 2000);
  };
  
  const handleFileUpload = () => {
    // This would normally handle file upload
    toast.info("File upload functionality would be implemented here");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-4xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-brand-900 mb-3">
          Upload video or paste URL to
          <br />get best scripts based on your topic
        </h1>
      </div>
      
      {/* Steps */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-center items-start gap-6">
          {/* Step 1 */}
          <div className="flex items-center w-full md:w-auto">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              videoSubmitted ? 'bg-success-500 text-white' : 'bg-brand-100 text-brand-800'
            }`}>
              {videoSubmitted ? <CheckCircle size={18} /> : "1"}
            </div>
            <div className="ml-3">
              <h3 className={`font-medium ${step === 1 ? 'text-brand-900' : 'text-brand-700'}`}>
                Step-1: Tell us which viral video you wanna imitate
              </h3>
            </div>
          </div>
          
          {/* Connector */}
          <div className="hidden md:block w-12 h-0.5 mt-4 bg-gray-200"></div>
          
          {/* Step 2 */}
          <div className="flex items-center w-full md:w-auto">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              detailsSubmitted ? 'bg-success-500 text-white' : 
              step === 2 ? 'bg-brand-100 text-brand-800' : 
              'bg-gray-100 text-gray-500'
            }`}>
              {detailsSubmitted ? <CheckCircle size={18} /> : "2"}
            </div>
            <div className="ml-3">
              <h3 className={`font-medium ${
                step === 2 ? 'text-brand-900' : 
                step > 2 ? 'text-brand-700' : 
                'text-brand-400'
              }`}>
                Step-2: Tell us what kinda video you wanna create
              </h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Step 1 Content */}
      {step === 1 && (
        <div className="animate-fade-in">
          <form onSubmit={handleVideoSubmit} className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Paste URL here"
                className="flex-grow px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
              
              <div className="text-center py-2 md:py-0">OR</div>
              
              <button
                type="button"
                onClick={handleFileUpload}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Upload size={18} />
                Upload video
              </button>
            </div>
            
            <button
              type="submit"
              className="mt-8 mx-auto block px-8 py-3 bg-brand-900 text-white rounded-md font-medium hover:bg-brand-800 transition-all"
            >
              Continue
            </button>
          </form>
        </div>
      )}
      
      {/* Step 2 Content */}
      {step === 2 && (
        <div className="animate-fade-in">
          <form onSubmit={handleDetailsSubmit}>
            <textarea
              value={scriptDetails}
              onChange={(e) => setScriptDetails(e.target.value)}
              placeholder="Write down more info about video, such as topic, target audience, speaking tone, video duration, platform, etc."
              className="w-full px-4 py-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 min-h-[200px]"
            ></textarea>
            
            <button
              type="submit"
              disabled={loading}
              className={`mt-8 mx-auto block px-12 py-3 bg-brand-900 text-white rounded-md font-medium transition-all ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-800'
              }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <Clock size={18} className="animate-spin mr-2" />
                  Generating...
                </span>
              ) : 'Start writing'}
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-brand-600">
            By uploading a video or URL you agree to our <a href="#" className="text-brand-800 underline">Terms of Service</a>.
            To learn more about how CopyScript handle your personal data, check our <a href="#" className="text-brand-800 underline">Privacy Policy</a>.
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateScript;
