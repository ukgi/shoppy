import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AnimateRoutes from "./AnimateRoutes/AnimateRoutes";
import { UserContextApiProvider } from "./context/UserContextApi";

function App() {
  return (
    <div className='App'>
      <UserContextApiProvider>
        <BrowserRouter>
          <Header />
          <AnimateRoutes />
        </BrowserRouter>
      </UserContextApiProvider>
    </div>
  );
}

export default App;
