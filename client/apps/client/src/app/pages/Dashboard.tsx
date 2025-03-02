
import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, ChevronRight, Trash } from "lucide-react";

// Sample scripts data
const sampleScripts = [
  {
    id: "1",
    title: "5 Lessons from Atomic Habits in Under 60 Seconds",
    duration: "60s",
    created: "Dec 6, 2024 15:30",
    tags: ["booksummary", "atomichabits", "self-growing"]
  }
];

const Dashboard = () => {
  const [scripts, setScripts] = useState(sampleScripts);

  const deleteScript = (id: string) => {
    setScripts(scripts.filter(script => script.id !== id));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-brand-900 mb-2 flex items-center">
          <FileText className="mr-2" size={24} />
          Recent Scripts
        </h1>
        <p className="text-brand-600">
          Access and manage your recently created video scripts
        </p>
      </div>
      
      {scripts.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50 text-brand-700 font-medium">
            <div className="col-span-5 md:col-span-6">Title</div>
            <div className="col-span-3 md:col-span-3 text-center">Video duration</div>
            <div className="col-span-4 md:col-span-3 text-center">Uploaded time</div>
          </div>
          
          {scripts.map((script) => (
            <div 
              key={script.id}
              className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-all items-center"
            >
              <div className="col-span-5 md:col-span-6">
                <Link 
                  to={`/scripts/${script.id}`}
                  className="font-medium text-brand-900 hover:text-brand-600 transition-colors flex items-center"
                >
                  {script.title}
                  <ChevronRight size={16} className="ml-1 opacity-70" />
                </Link>
                <div className="flex flex-wrap gap-2 mt-1">
                  {script.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-brand-100 text-brand-800 px-2 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="col-span-3 md:col-span-3 text-center">
                {script.duration}
              </div>
              
              <div className="col-span-3 md:col-span-2 text-center text-sm text-brand-700">
                {script.created}
              </div>
              
              <div className="col-span-1 text-right">
                <button 
                  onClick={() => deleteScript(script.id)}
                  className="p-1 text-danger-500 hover:text-danger-700 transition-colors"
                  aria-label="Delete script"
                >
                  <Trash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
          <FileText size={48} className="mx-auto text-brand-300 mb-4" />
          <h3 className="text-xl font-medium text-brand-800 mb-2">No scripts yet</h3>
          <p className="text-brand-600 mb-6">
            Your recently created scripts will appear here
          </p>
          <Link
            to="/generate"
            className="px-6 py-2 bg-black text-white rounded-md font-medium hover:bg-black/90 transition-all"
          >
            Create Your First Script
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
