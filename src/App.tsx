import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import ArtToys from './pages/Arttoys';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import ProdManage from './pages/admin pages/ProdManage';
import AccountManage from './pages/admin pages/AccountManage';
import PaymentLog from './pages/admin pages/PaymentLog';

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
          <Route path='/prod_manage' element={<ProdManage></ProdManage>}></Route>
          <Route path='/acc_manage' element={<AccountManage></AccountManage>}></Route>
          <Route path='/payment_log' element={<PaymentLog></PaymentLog>}></Route>
        </Routes>
      </Router>
    </>
  )
}