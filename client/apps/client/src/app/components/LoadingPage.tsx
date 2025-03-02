
const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto mb-6"></div>
        <h2 className="text-xl font-medium text-brand-800">Loading</h2>
        <p className="text-brand-500 mt-2">Preparing your experience...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
