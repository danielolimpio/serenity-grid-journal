import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Index from "./pages/Index";
import Article from "./pages/Article";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CookiesPolicy from "./pages/CookiesPolicy";
import Search from "./pages/Search";
import QuizIndex from "./pages/QuizIndex";
import QuizQuestion from "./pages/QuizQuestion";
import GlossaryIndex from "./pages/GlossaryIndex";
import GlossaryTerm from "./pages/GlossaryTerm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/artigo/:slug" element={<Article />} />
            <Route path="/categoria/:slug" element={<Category />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos" element={<TermsOfUse />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/busca" element={<Search />} />
            <Route path="/quizz" element={<QuizIndex />} />
            <Route path="/quizz/:quizSlug/:questionSlug" element={<QuizQuestion />} />
            <Route path="/glossario" element={<GlossaryIndex />} />
            <Route path="/glossario/:slug" element={<GlossaryTerm />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
