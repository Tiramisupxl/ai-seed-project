
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import LoadingPage from "./components/LoadingPage";
const Index = lazy(() => import("./pages/Index"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const GenerateScript = lazy(() => import("./pages/GenerateScript"));
const ScriptDetail = lazy(() => import("./pages/ScriptDetail"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Faqs = lazy(() => import("./pages/Faqs"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Index />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="generate" element={<GenerateScript />} />
              <Route path="scripts/:id" element={<ScriptDetail />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="faqs" element={<Faqs />} />
              <Route path="blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
