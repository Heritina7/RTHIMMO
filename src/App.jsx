import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./page/home";
import Catalogue from "./page/Catalogue";
function App() {
  return (
    
    <Router>
      
      <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Catalogue/" element={<Catalogue/>}/>
        </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;
