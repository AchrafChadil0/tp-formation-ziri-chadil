import "@mantine/core/styles.css";
//import AccueilTemplate from "./templates/FormateurTemplate/AccueilTemplate.tsx";
// eslint-disable-next-line import/no-unresolved
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/Auth/LoginPage/LoginPage.tsx";
import AccueilTemplate from "./templates/AccueilTemplate/AccueilTemplate.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      gcTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/accueil" element={<AccueilTemplate />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
export default App;
