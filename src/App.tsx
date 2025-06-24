import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/shops"
            element={
              <div className="p-8 text-white bg-gray-900 min-h-screen">
                Магазины - В разработке
              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="p-8 text-white bg-gray-900 min-h-screen">
                Сервисы - В разработке
              </div>
            }
          />
          <Route
            path="/schools"
            element={
              <div className="p-8 text-white bg-gray-900 min-h-screen">
                Мотошколы - В разработке
              </div>
            }
          />
          <Route
            path="/events"
            element={
              <div className="p-8 text-white bg-gray-900 min-h-screen">
                Мероприятия - В разработке
              </div>
            }
          />
          <Route
            path="/roadside-help"
            element={
              <div className="p-8 text-white bg-gray-900 min-h-screen">
                Помощь на дороге - В разработке
              </div>
            }
          />
          <Route
            path="/utilities"
            element={
              <div className="p-8 text-white bg-gray-900 min-h-screen">
                Полезности - В разработке
              </div>
            }
          />
          <Route
            path="/about-us"
            element={
              <div className="p-8 text-white bg-gray-900 min-h-screen">
                О нас - В разработке
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
