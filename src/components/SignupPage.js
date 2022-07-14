/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import LOGO from "../assets/logo.svg";
import SVG1 from "../assets/main2.svg";
import SVG2 from "../assets/main3.svg";

const breakpoints = [720, 635, 530, 480];
const mediaQuery = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

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

const ContentDiv = css`
    display: flex;
    flex-direction: column;
    padding: 30px 30px 20px 30px;
    border-radius: 10px;
    box-shadow: 0 0 2px #ddd;
    background: #fff;
    gap: 40px;
    width: 100%;
`;

const Heading = styled("h1")`
    display: ${props => props.inner? "block":"none"};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    background: linear-gradient(90deg, #688FF4, #9469A9);
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(0,0,0,0);
    ${mediaQuery[mediaQuery.length - 1]} {
        display: ${props => props.inner? "none":"block"};
        margin-top: 20px;
        margin-bottom: 30px;
    }
`

const ButtonsSection = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    width: 100%;
    margin-bottom: -20px;
    ${mediaQuery[mediaQuery.length - 1]}{
        flex-direction: column;
    }
`;

const Links = css`
    text-decoration: none;
    color: unset;
    max-width: 250px;
    flex:1;
    ${mediaQuery[mediaQuery.length - 1]}{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Button = styled("div")`
    position: relative;
    border: 1px solid #C4C4C4;
    /* width: 100%; */
    /* max-width: 330px; */
    aspect-ratio: 1.2/1;
    background-color: #fff;
    border-radius: 6px;
    padding: 46px;
    box-shadow: 0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15);
    cursor: pointer;
    :hover{
        box-shadow: 1px 1px 0px 1px #6B8DF0, -1px -1px 0px 1px #6B8DF0, 1px -1px 0px 1px #6B8DF0, -1px 1px 0px 1px #6B8DF0;
    }
    ${mediaQuery[mediaQuery.length - 1]}{
        aspect-ratio: 1.6/1;
        padding-top: 15px;
        padding-bottom: 0;
    }   
`

const ButtonPreview = styled("div")`
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    /* height: 70%; */
    /* aspect-ratio: 3/1; */
    height: 85%;
    margin-bottom: 15px;
    ${mediaQuery[2]} {
        height: 125%;
    }
    ${mediaQuery[mediaQuery.length - 1]}{
        /* height: 6rem; */
        height: 55%;
    }
`

const ButtonTitle = styled("h2")`
    display: block;
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    background: unset;
    color: #1B163A;
    font-weight: 400;
    font-size: 0.9rem;
    word-break: break-word;
    text-align: center;
    ${mediaQuery[mediaQuery.length - 1]}{
        bottom: 15px;
    }
`;

const LearnMore = styled("div")`
    color: #9EA0A5;
    text-align: center;
    font-size: 0.7rem;
`

function SignupPage() {
    return(
        <div css={[wrapper, LogoSection]}>
            <Heading>Please select your role</Heading>
            <div css={ContentDiv}>
                <Heading inner>Please select your role</Heading>

                <ButtonsSection>
                    <Link to="/freelance" css={Links}>
                        <Button>
                            <ButtonPreview image={SVG1} />
                            <ButtonTitle>Freelance line producer</ButtonTitle>
                        </Button>
                    </Link>

                    <Link to="/company" css={Links}>
                        <Button>
                            <ButtonPreview image={SVG2} />
                            <ButtonTitle>Company admin</ButtonTitle>
                        </Button>
                    </Link>
                </ButtonsSection>

                <LearnMore>Need to learn more about roles? Click <a css={css`color: #6B8DF0`} href="https://learn.chedar.io/docs/getting_started/roles">here</a></LearnMore>
            </div>
        </div>
    );
}

export default SignupPage;
