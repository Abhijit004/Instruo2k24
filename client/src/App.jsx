import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Navbar2 from "./components/NavBar2";
function App() {
  return (
    <main>
      <Router>
        {/* <Navbar /> */}
        <Navbar2 />
        <AllRoutes />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
