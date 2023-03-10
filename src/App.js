import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AnimateRoutes from "./AnimateRoutes/AnimateRoutes";
import { UserContextApiProvider } from "./context/UserContextApi";
import ProductsContextApiProvider from "./context/ProductsContextApi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <UserContextApiProvider>
          <ProductsContextApiProvider>
            <BrowserRouter>
              <Header />
              <AnimateRoutes />
            </BrowserRouter>
          </ProductsContextApiProvider>
        </UserContextApiProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
