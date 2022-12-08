
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './header';
import './App.css'
import { About } from './About';
import Home from './Home';
import Projects from './Projects';
import Error from './Error';
import Footer from './Footer';
function App() {
  return (
    <div className='container'>
      
      <BrowserRouter>
       <Header />
     <Routes>
      <Route path='/'  element={<Home />}></Route>
      <Route index element={<Home />}/>
      <Route path='/About'  element={<About /> } />
      <Route path='/Contact' element={<Projects />} />
      <Route path='*' element={<Error />} />
     </Routes>
     <Footer />
     
      
      </BrowserRouter>
      
    </div>
   
  );
}

export default App;
