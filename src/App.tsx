import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import IndexEditorial from "./pages/IndexEditorial";
import IndexShader from "./pages/IndexShader";
import IndexScroll3D from "./pages/IndexScroll3D";
import IndexTerminal from "./pages/IndexTerminal";
import IndexPhysics from "./pages/IndexPhysics";
import IndexCube from "./pages/IndexCube";
import IndexChroma from "./pages/IndexChroma";
import NotFound from "./pages/NotFound";
import StyleToggle from "./components/StyleToggle";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <StyleToggle />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/editorial" element={<IndexEditorial />} />
            <Route path="/shader" element={<IndexShader />} />
            <Route path="/scroll3d" element={<IndexScroll3D />} />
            <Route path="/terminal" element={<IndexTerminal />} />
            <Route path="/physics" element={<IndexPhysics />} />
            <Route path="/cube" element={<IndexCube />} />
            <Route path="/chroma" element={<IndexChroma />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
