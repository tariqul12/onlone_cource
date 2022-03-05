// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home2 from './Component/Home/Home2';
import Blog from './Component/Pages/Blog';
import Jobs from './Component/Pages/Jobs';
import Cources from './Component/Pages/Cources';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/success" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/courses" element={<Cources />} />
            <Route path="*" element={<h1>Error 404 not found</h1>} />
          </Routes>
      </BrowserRouter>
     
     
     {/* <Home /> */}
    </>
  );
}

export default App;
