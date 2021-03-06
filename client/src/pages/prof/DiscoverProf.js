import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import FirstSection from '../../components/FirstSection'
import InfoSection from '../../components/InfoSection'
import { homeObjProf1, homeObjProf2} from '../../components/InfoSection/Data'
import Footer from '../../components/Footer'



const DiscoverProf = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
   


  return (
    <>

    <NavBar />
    <FirstSection />
    <InfoSection {...homeObjProf1} />
    <InfoSection {...homeObjProf2} />
    <Footer />
   
    
    </>
   
  );
};

export default DiscoverProf;