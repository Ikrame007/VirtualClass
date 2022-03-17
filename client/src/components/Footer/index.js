import React from 'react';
import {
     FooterContainer,
     FooterWrap,
     FooterLinksContainer,
     FooterLinksWrapper,
     FooterLinkItems,
     FooterLinkTitle,
     FooterLink

 } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>CONTACT US </FooterLinkTitle>
                            <FooterLink to="/signin"> <i className="fa fa-phone" ></i> +212 654362588</FooterLink>
                            <FooterLink to="/signin"> <i className="fa fa-fax" ></i>  0560254878 </FooterLink>
                            <FooterLink to="/signin"> <i className="fa fa-envelope-o" ></i>  ViClass@gmail.com</FooterLink>
                    </FooterLinkItems>
                    
                    
                    
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>A PROPOS </FooterLinkTitle>
                            <FooterLink to="/signin"> Concept</FooterLink>
                            <FooterLink to="/signin"> Qui sommes-nous ?</FooterLink>
                            <FooterLink to="/signin"> FAQ  </FooterLink>
                            <FooterLink to="/signin"> About us</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>FOLLOW US </FooterLinkTitle>
                            <FooterLink to="/signin">  <i className="fa fa-facebook-official" ></i> Facebook</FooterLink>
                            <FooterLink to="/signin">  <i className="fa fa-instagram" ></i> Instagram</FooterLink>
                            <FooterLink to="/signin"> <i className="fa fa-twitter" ></i> Twitter</FooterLink>
                            <FooterLink to="/signin"><i className="fa fa-linkedin" ></i> Linked In</FooterLink>
                    </FooterLinkItems>
                    
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>

    </FooterContainer>
  );
}

export default Footer;