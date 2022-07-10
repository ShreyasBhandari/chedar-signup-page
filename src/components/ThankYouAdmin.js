/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {css} from "@emotion/react";

const container = css`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    gap: 10px;
    background: #fff;
    box-shadow: 0 0 2px #ddd;
`;

const background = css`
    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: #f9fafb;
    }
`;

const Header = styled("h1")`
    color: #364C63;
    font-weight: 500;
    font-size: 1.8rem;
    text-align: center;
    @media (max-width: 551px){
        font-size: 1.5rem;
    }
    @media (max-width: 370px){
        font-size: 1.2rem;
    }
`;

const ImageStyle = css`
    height: 300px;
    margin-top: 20px;
    @media (max-width: 551px){
        height: 200px;
    }
    @media (max-width: 370px){
        height: 150px
    }
`;

function ThankYouAdmin() {
  return (
    <div css={[background, container]}>
        <Header>Thank you for signing up</Header>
        <Header>We'll reach out to you with your credentials</Header>

        <img css={ImageStyle} src={require("../assets/thankyou-message.png")} alt="Thank You" />
    </div>
  )
}

export default ThankYouAdmin