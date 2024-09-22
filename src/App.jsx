import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </main>
  );
}

export default App;
