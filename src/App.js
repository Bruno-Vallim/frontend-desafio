import{ BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter> 
        <Navbar/>
        <Container customClass="min-height">
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/register" element={<Register/>}/> 
            <Route path= "/login" element={<Login/>}/>     
          </Routes>
        </Container>

      <Footer/>

    </BrowserRouter>
  );
}

export default App