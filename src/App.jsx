import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import '../src/App.css';
import { Footer } from './Components/Footer/Footer';
import { NavBar2 } from './Components/Navbar/NavBar2';
import { AboutPage } from './Pages/AboutPage';
import { Blog } from './Pages/Blog';
import { Book } from './Pages/Book';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';

function LoadingScreen() {
  return (
    <div className='loading-screen'>
      <PacmanLoader color='#C93C18' loading={true} size={40} />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, [location.key]);

  return (
    <div className='overflow-hidden'>
      <NavBar2 />
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book' element={<Book />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
