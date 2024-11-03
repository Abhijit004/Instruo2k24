import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <AllRoutes />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
