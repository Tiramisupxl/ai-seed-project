
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "How to Create Viral TikTok Scripts That Convert",
      excerpt: "Learn the key elements that make TikTok videos go viral and how to incorporate them into your scripts.",
      category: "TikTok",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1563940709258-e3968f4676f8?q=80&w=1920&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "The Science Behind YouTube Thumbnails and Titles",
      excerpt: "Discover the psychological principles that make viewers click on your videos.",
      category: "YouTube",
      date: "May 10, 2024",
      image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=1920&auto=format&fit=crop",
    },
    {
      id: "3",
      title: "5 Script Templates That Drive Engagement",
      excerpt: "Ready-to-use templates for different video styles that consistently generate high engagement.",
      category: "Scripts",
      date: "May 5, 2024",
      image: "https://images.unsplash.com/photo-1590650153132-61e25ab40372?q=80&w=1920&auto=format&fit=crop",
    }
  ];
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">
          Blog
        </h1>
        <p className="text-xl text-brand-700 max-w-3xl">
          Tips, tricks, and insights to help you create better video content
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article 
            key={post.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md hover:-translate-y-1"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="mx-2 text-brand-300">•</span>
                <span className="text-sm text-brand-500">{post.date}</span>
              </div>
              
              <h2 className="text-xl font-semibold text-brand-900 mb-3">
                {post.title}
              </h2>
              
              <p className="text-brand-700 mb-4">
                {post.excerpt}
              </p>
              
              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-brand-800 font-medium hover:text-brand-600 transition-colors"
              >
                Read More
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="px-6 py-3 border border-brand-200 text-brand-800 rounded-md font-medium hover:bg-gray-50 transition-all">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default Blog;
