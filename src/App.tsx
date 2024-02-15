import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import {SelectedPage} from './shared/types'
import  Home  from "./components/Home/Home";
import Benefits from './components/Benefits/Benefits'
import OurClasses from './components/OurClasses/ourClasses';
import Contacts from '@/components/Contacts/Contacts'
import Footer from './components/Footer/Footer';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Inicio)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true); 
        setSelectedPage(selectedPage);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false); 
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app bg-gray-900'>
        <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <Contacts  />
        <Footer />
    </div>
  )
}

export default App
