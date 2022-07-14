/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {css} from "@emotion/react";

import LOGO from "../assets/logo.svg";
import Image from "../assets/thankyou-message.svg";

const LogoSection = css`
    :before{
        content: "";
        position: absolute;
        top: -92px;
        left:0;
        height: 85px;
        width: 100%;
        background-image: url(${LOGO});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
`;

const wrapper = css`
    position: relative;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
`;

const container = css`
    display: flex;
    flex-direction: column;
    padding: 30px 30px 15px 30px;
    background: #fff;
    box-shadow: 0 0 2px #ddd;
    border-radius: 10px;
`;

const Header = styled("h1")`
    color: #364C63;
    font-weight: ${props => props.subheader? (props.thin?"300":"500"):"500"};
    font-size: ${props => props.subheader? "1.8rem":"2.2rem"};
    text-align: center;
    margin-bottom: 5px;
    @media (max-width: 551px){
        font-size: ${props => props.subheader? "1.5rem":"2rem"};
        margin-bottom: 15px;
    }
    @media (max-width: 370px){
        font-size: ${props => props.subheader? "1rem":"1.8rem"};
    }
`;

const ImagePreview = styled("img")`
    height: 230px;
    margin: 20px 0;
    @media (max-width: 551px){
        height: 200px;
    }
    @media (max-width: 370px){
        height: 150px
    }
`;

const ExploreLink = styled("p")`
    color: #9EA0A5;
    align-self: flex-end;
    font-size: 0.8rem;
    margin-top: 25px;
    @media (max-width: 370px){
        font-size: 0.7rem
    }
`;

function ThankYouPage() {
  return (
    <div css={[wrapper, LogoSection]}>
        <div css={container}>
            <Header>Clap!</Header>
            <Header subheader>Thank you for signing up to this first scene</Header>
            <Header subheader thin>Please check your email for your credentials</Header>
            <ImagePreview src={Image} alt="Thank You" />
            <ExploreLink>Start exploring our Learning center <a css={css`color: unset`} href="https://learn.chedar.io">here</a></ExploreLink>
        </div>
    </div>
  )
}

export default ThankYouPage