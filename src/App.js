import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import System from './pages/System'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Router basename="/personal-site">
      <Routes>
        <Route path="/" element={<System />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
