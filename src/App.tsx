import Button from './components/button/button';
import Nav from './components/nav/nav';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import ArtToys from './pages/Arttoys';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';

export default function App() {
  return (
    <>  
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/artists' element={<Artists></Artists>}></Route>
          <Route path='/art_toys' element={<ArtToys></ArtToys>}></Route>
          <Route path='/gallery' element={<Gallery></Gallery>}></Route>
          <Route path='/about_us' element={<AboutUs></AboutUs>}></Route>
        </Routes>
      </Router>
    </>
  )
}

{/* <Hello123></Hello123> */}