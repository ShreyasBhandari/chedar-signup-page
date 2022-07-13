/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import { Link } from "react-router-dom";

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

const Button = styled("div")`
    background: #364C63;
    color: #fff;
    text-transform: uppercase;
    margin-top: 10px;
    padding: 10px 50px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    cursor: pointer;
    @media (max-width: 551px){
        font-size: 0.9rem;
    }
    @media (max-width: 370px){
        font-size: 0.8rem;
        padding: 10px 30px;
    }
`;

const Links = css`text-decoration: none;color: unset`;

function ThankYouAdmin() {
  return (
    <div css={css`display: flex;flex-direction:column;align-items: center`}>
        <div css={[background, container]}>
            <Header>Thank you for signing up</Header>
            <Header>We'll reach out to you with your credentials</Header>
            <img css={ImageStyle} src={require("../assets/thankyou-message.png")} alt="Thank You" />
        </div>
        <Link to="/" css={Links}><Button>Back to landing page</Button></Link>
    </div>
  )
}

export default ThankYouAdmin