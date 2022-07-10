/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const breakpoints = [720, 635, 480];
const mediaQuery = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

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

const container = css`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    gap: 40px;
    background: #fff;
    box-shadow: 0 0 2px #ddd;
    width: 100%;
    max-width: 960px;
    ${mediaQuery[mediaQuery.length - 1]} {
        background: unset;
    }
`;

const Heading = styled("h1")`
    color: #364C63;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
`

const ButtonsSection = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    width: 100%;
    ${mediaQuery[mediaQuery.length - 1]}{
        flex-direction: column;
    }
`;

const Button = styled("div")`
    border: 1px solid #C4C4C4;
    /* width: 100%; */
    /* max-width: 330px; */
    aspect-ratio: 1.9/1;
    background-color: #fff;
    border-radius: 6px;
    padding: 15px 20px;
    box-shadow: 0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15);
    cursor: pointer;
    ${mediaQuery[1]}{
        aspect-ratio: 1/1;
    }
    ${mediaQuery[mediaQuery.length - 1]}{
        aspect-ratio: unset;
    }
`

const ButtonPreview = styled("div")`
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    /* height: 70%; */
    aspect-ratio: 3/1;
    width: 100%;
    margin-bottom: 15px;
    ${mediaQuery[1]}{
        height: 70%;
    }
`

const ButtonTitle = styled(Heading.withComponent("h2"))`
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.2rem;
    word-break: break-word;
    ${mediaQuery[0]}{
        font-size: 1rem
    }
    ${mediaQuery[1]}{
        font-size: 1.15rem
    }
`;

const LearnMore = styled("div")`
    color: #9EA0A5;
    text-align: center;
    font-size: 0.7rem;
    margin-bottom: 20px;
`

const Links = css`
    text-decoration: none;
    color: unset;
    max-width: 330px;
    flex:1;
    ${mediaQuery[1]}{
        width: 180px;
    }
    ${mediaQuery[mediaQuery.length - 1]}{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
    }
`;

function SignupPage() {
    return(
        <div css={[background, container]}>
            <div css={css`display:flex;flex-direction:column;justify-content:flex-start;align-items: center;gap: 20px;`}>
                <img src={require("../assets/main1.png")} alt="Signup Header" css={css`height: 80px;`}/>
                <Heading>Please select your Role</Heading>
            </div>

            <ButtonsSection>
                <Link to="/freelance" css={Links}>
                    <Button image={require("../assets/main2.png")}>
                        <ButtonPreview image={require("../assets/main2.png")} />
                        <ButtonTitle>Freelance Line Producer</ButtonTitle>
                    </Button>
                </Link>

                <Link to="/company" css={Links}>
                    <Button image={require("../assets/main3.png")}>
                        <ButtonPreview image={require("../assets/main3.png")} />
                        <ButtonTitle>Company Admin</ButtonTitle>
                    </Button>
                </Link>
            </ButtonsSection>

            <LearnMore>Need to learn more about roles? Click <a css={css`color: #56575A`} href="">here</a></LearnMore>
        </div>
    );
}

export default SignupPage;
