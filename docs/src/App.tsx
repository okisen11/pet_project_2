import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const App = () => (
  <ConfigProvider
    theme={{
      token: {
        fontFamily: 'inherit',
        colorPrimary: '#7c3aed', // Purple-600 matching Tailwind
      },
    }}
  >
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Sonner />
      </BrowserRouter>
    </QueryClientProvider>
  </ConfigProvider>
);

export default App;