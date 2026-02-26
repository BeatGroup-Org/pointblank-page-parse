import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Eventi from "./pages/Eventi";
import EventoDetail from "./pages/EventoDetail";
import ChiSiamo from "./pages/ChiSiamo";
import Staff from "./pages/Staff";
import Formazione from "./pages/Formazione";
import AmministrazioneTrasparente from "./pages/AmministrazioneTrasparente";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ContactFab from "./components/ContactFab";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ContactFab />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eventi" element={<Eventi />} />
          <Route path="/eventi/:id" element={<EventoDetail />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/formazione" element={<Formazione />} />
          <Route path="/amministrazione-trasparente" element={<AmministrazioneTrasparente />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
