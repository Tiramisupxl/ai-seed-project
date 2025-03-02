
import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Download, Copy, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

const ScriptDetail = () => {
  // This would typically come from an API or state management
  const script = {
    id: "1",
    title: "5 Lessons from Atomic Habits in Under 60 Seconds",
    content: `在《原子习惯》中, James Clear教导我们如何建立更好的习惯并破坏坏习惯, 以便我们过出最好的生活。 这就是我书中的五个关键课程。第一,小习惯会导致巨大的变化。 如果每天你变得1%更好, 你将在今年年底变得37倍更好。 正如James所写的,习惯是自我改善的核心利益。 第二,如果你想要更好的结果, 尽量集中在系统上,而不是在目标上。 目标是你想要达到的结果, 但系统是关于那些结果的过程。 第三,如果你想改变习惯,集中在自己想要成为的人, 而不是想要达到的东西上。 当习惯来自于我们是谁的, 我们会更有动力去实现们想要的东西。 第四,遵循四个行为变化的法律。 让它明显,让它吸引人, 让它简单,让它满足。 第五,耐心。 为了看到有意义的结果, 我们的习惯必须持续足够的时间。`,
    tags: ["booksummary", "atomichabits", "self-growing"],
    exportOptions: ["txt", "docx", "pdf"]
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(script.content);
    toast.success("Script copied to clipboard");
  };
  
  const downloadScript = (format: string) => {
    // This would normally trigger a download
    toast.success(`Script downloaded as ${format.toUpperCase()}`);
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-5xl">
      <div className="mb-6">
        <Link 
          to="/dashboard" 
          className="inline-flex items-center text-brand-700 hover:text-brand-900"
        >
          <ChevronLeft size={18} className="mr-1" />
          Back to Dashboard
        </Link>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex-grow">
          <h1 className="text-3xl font-bold text-brand-900 mb-4">
            {script.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {script.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-sm bg-brand-100 text-brand-800 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="whitespace-pre-wrap text-brand-800 leading-relaxed">
              {script.content}
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-24">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-brand-900 mb-4">Export</h2>
              
              <div className="space-y-4">
                {script.exportOptions.map((format) => (
                  <button
                    key={format}
                    onClick={() => downloadScript(format)}
                    className="flex items-center w-full p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Download size={18} className="mr-3 text-brand-600" />
                    <span>Download {format.toUpperCase()}</span>
                  </button>
                ))}
                
                <button
                  onClick={copyToClipboard}
                  className="flex items-center w-full p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <Copy size={18} className="mr-3 text-brand-600" />
                  <span>Copy Script</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptDetail;
