import React from 'react'
import { InfoContainer,Column2, Img, ImgWrap,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap } from './InfoElements'

const InfoSection = ({lightBg,id,imgStart,topLine,headline,darkText,lightText,description,buttonLabel,img,alt,tolink}) => {
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