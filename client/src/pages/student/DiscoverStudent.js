import React from 'react'
import NavBar1 from '../../components/NavBar/NavBar1'
import { useState } from 'react'
import FirstSection from '../../components/FirstSection'
import InfoSection from '../../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../../components/InfoSection/Data'
import Footer from '../../components/Footer'



const DiscoverStudent = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
   


  return (
    <>

    <NavBar1 />
    <FirstSection />
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <InfoSection {...homeObjThree} />
    <Footer />
   
    
    </>
   
  );
};

export default DiscoverStudent;