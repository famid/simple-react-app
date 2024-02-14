import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Create from './components/Create.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './components/BlogDetails.jsx';

function App() {

  return (
    <Router>
      <Navbar />
      <div className="content">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
         </Routes>
      </div>
    </Router>
  )
}

export default App
