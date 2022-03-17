import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
// import Footer from '../../components/foter'
import { useState } from 'react'
import FirstSection from '../../components/FirstSection'
import InfoSection from '../../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo ,homeObjProf1, homeObjProf2} from '../../components/InfoSection/Data'
import Footer from '../../components/Footer'
// import { MdSettingsInputComponent } from 'react-icons/md'



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
    {/* <InfoSection {...homeObjThree} /> */}
    <Footer />
   
    
    </>
   
  );
};

export default DiscoverProf;