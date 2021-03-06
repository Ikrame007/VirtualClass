import React ,{useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FirstSectionContainer,FirstSectionBg,VideoBg,SectionContent,SectionH1,SectionP,SectionBtnWrapper,ArrowForward,ArrowRight } from './FirstElements';
import video from '../../assets/videos/videob.mp4';
import { Button } from '../ButtonElements';


const FirstSection = () => {
const [hover,setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

  return (
      <FirstSectionContainer>
          <FirstSectionBg>
              <VideoBg autoPlay loop muted src={video} type='videob/mp4' />
          </FirstSectionBg>
          <SectionContent>
              <SectionH1>Aspire, Learn, Advance</SectionH1>
              <SectionP>Build your practical skills by enrolling in advanced training programs, and gain certificates that help you enter the labor market and develop your career.</SectionP>
              <SectionBtnWrapper>
                <a href="/auth">Get Started {hover ? <ArrowForward /> : <ArrowRight />}</a>
                  {/* <Button to='auth' onMouseEnter={onHover} onMouseLeave={onHover} >
                      Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button> */}
              </SectionBtnWrapper>
          </SectionContent>
      </FirstSectionContainer>
    
  );
};

export default FirstSection;