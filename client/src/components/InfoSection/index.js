import React from 'react'
// import { MdDescription } from 'react-icons/md'
import { Button } from '../ButtonElements';
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";


import { InfoContainer,Column2, Img, ImgWrap,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap } from './InfoElements'

const InfoSection = ({lightBg,id,imgStart,topLine,headline,darkText,lightText,description,buttonLabel,img,alt,primary,dark,dark2,tolink}) => {
  return (
    <>
    <InfoContainer  lightBg={lightBg} id={id} >
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <a href={tolink} className="button">{buttonLabel}</a>
                        {/* <Button
                         onClick={tolink}
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact={true}
                         offset={-80}
                         primary={primary ? 1 : 0}
                         dark={dark ? 1 : 0}
                         dark2={dark2 ? 1 : 0}
                         ><a href={tolink}>{buttonLabel}</a></Button> */}
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap> 
                        <Img  src={img} alt={alt} type="image/svg+xml"/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    
    </>
  )
}

export default InfoSection