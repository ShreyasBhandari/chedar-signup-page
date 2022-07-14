/* eslint-disable default-case */
/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import {useForm} from 'react-hook-form';
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {Link, useNavigate} from "react-router-dom";

import LOGO from "../assets/logo.svg";
import CheckedIcon from "../assets/check.svg";
import Image from "../assets/signup-admin.svg";

const breakpoints = [614, 525, 320, 480];
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
        ${mediaQuery[mediaQuery.length - 1]} {
            display: none;
        }
    }
`;

const wrapper = css`
    position: relative;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    ${mediaQuery[mediaQuery.length - 1]} {
        margin-top: 30px;
    }
`;

const container = css`
    display: flex;
    flex-direction: column;
    padding: 30px;
    background: #fff;
    box-shadow: 0 0 2px #ddd;
    border-radius: 10px;
`;

const FormSection = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    ${mediaQuery[mediaQuery.length - 1]}{
        flex-direction: column-reverse;
    }
`;

const FormHeader = styled("div")`
    display: ${props => props.inner? "flex":"none"};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: calc(50% - 20px);
    color: #9EA0A5;
    font-size: 0.8rem;
    margin-bottom: 15px;
    ${mediaQuery[0]}{
        font-size: 0.7rem;
    }
    ${mediaQuery[1]}{
        width: 100%;
    }
    ${mediaQuery[mediaQuery.length - 1]}{
        display: ${props => props.inner? "none":"flex"};
        padding: 0 10px;
        font-size: 0.9rem;
        font-weight: 500
    }
    ${mediaQuery[2]}{
        font-size: 0.8rem;
    }
`;

const Form = styled("div")`
    width: 100%;
    flex:1;
`;

const FormTitle = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
`;

const FormTitleHeader = styled("h2")`
    color: #364C63;
    font-weight: 500;
    ${mediaQuery[1]}{
        width: max-content
    }
`;

const FormTitleSubheader = styled(FormTitleHeader.withComponent("span"))`color: #9EA0A5;font-weight: 300;font-size: 0.8rem`;

const FormContent = styled("form")`
    margin-top: 20px;
    flex:1;
`;

const InputWrapper = styled("div")`
    width: 100%;
    height: 40px;
    position: relative;
    margin: 15px 0;
`;

const Input = styled("input")`
    height: 100%;
    width: 100%;
    border: ${props => props.focused? "2px solid #6B8DF0":"1px solid rgba(0, 0, 0, 0.32)"};
    border-radius: 8px;
    outline: none;
    padding: 0 15px;
    color: rgba(0,0,0,0.6);
    ::placeholder{
        color: rgba(0,0,0,0.6);
    }
`;

const Label = styled("label")`
    color: #364C63;
    background: #fff;
    padding: 0 5px;
    position: absolute;
    left: 12px;
    top: -5px;
    font-size: 0.7rem;
    display: ${props => props.inputLength > 0? "block":"none"};
`;

const CheckboxWrapper = styled("div")`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 7px;
    ${mediaQuery[0]}{
        gap: 10px;
    }
`;

const Checkbox = styled("div")`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    border: 2px solid #425A70;
    border-radius: 2px;
    cursor: pointer;
    background: ${props => props.checked? "#425A70":"#fff"};
    :before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: ${props => props.checked? "-1":"1"};
    }
`;

const CheckboxLabel = styled("label")`
    color: #9EA0A5;
    font-size: 0.8rem;
    cursor: pointer;
    user-select: none;
`;

const SubmitButtonDiv = styled("div")`
    position: relative;
    overflow: hidden;
    height: 40px;
    width: 100%;
    border-radius: 4px;
    background: #6759E5;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    cursor: pointer;
    :before{
        content: "";
        position: absolute;
        top: -42px;
        left: -33px;
        width: 155px;
        height: 66px;
        border-radius: 50%;
        background: #688FF4;
        filter: blur(13px);
    }
    :after{
        content: "";
        position: absolute;
        top: -35px;
        right: -75px;
        width: 150px;
        height: 60px;
        border-radius: 50%;
        background: #8D68F4;
        filter: blur(14px);
    }
`;

const SubmitButton = styled("input")`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    text-align: center;
    color: #fff;
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
`;

const Links = css`text-decoration: none;color: unset`;

const ImagePreviewSection = styled("div")`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    ${mediaQuery[mediaQuery.length - 1]}{
        display: none;
    }
`;

const ImagePreview = css`
    width: 60%;
    ${mediaQuery[mediaQuery.length - 1]}{
        width: 50%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 15px;
    }
`;

const Description = styled("p")`
    display: ${props => props.inner? "block":"none"};
    text-align: center;
    font-size: 1.4rem;
    ${mediaQuery[0]}{
        font-size: 1.1rem;
    }
    ${mediaQuery[mediaQuery.length - 1]}{
        display: ${props => props.inner? "none":"block"};
        margin: 25px 15px;
        font-size: 1.6rem;
        font-weight: 400;
    }
`;

const ErrorMessage = styled("p")`
    color: #cc0c00;
    font-size: 0.8rem;
    margin-left: 5px;
    margin-top: -10px;
    margin-bottom: ${props => props.pattern? "-8px":"-15px"};
`;

const gradientText = css`
    background: linear-gradient(90deg, #688FF4, #9469A9);
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(0,0,0,0);
`;

function SignupFreelancer() {
    const [fullNameFocus, setFullNameFocus] = useState(false);
    const [companyFocused, setCompanyFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [phoneFocused, setPhoneFocused] = useState(false);
    
    const [fullNameLength, setFullNameLength] = useState(0);
    const [companyLength, setCompanyLength] = useState(0);
    const [emailLength, setEmailLength] = useState(0);
    const [phoneLength, setPhoneLength] = useState(0);
    const [checked, setChecked] = useState(false);

    const {register, handleSubmit, formState:{errors}, clearErrors} = useForm();

    function handleChange(event){
        switch(event.target.name){
            case "fullname":
                setFullNameLength(event.target.value.length);
                clearErrors(event.target.name);
                break;
            case "company":
                setCompanyLength(event.target.value.length);
                clearErrors(event.target.name);
                break;
            case "email":
                setEmailLength(event.target.value.length);
                clearErrors(event.target.name);
                break;
            case "phonenumber":
                if(/[a-zA-Z]/.test(event.target.value)){
                    event.target.value = event.target.value.slice(0, -1);
                }
                setPhoneLength(event.target.value.length);
                clearErrors(event.target.name);
                break;
        }
    }

    const navigate = useNavigate();
    function onsubmit(data){
        navigate("/thankyou");
        console.log(data);
    }
        
    return (
        <div css={[wrapper, LogoSection]}>
        <FormHeader>
            <Link to="/" css={[Links, gradientText]}>
                <div css={css`display:flex;align-items:center;flex-direction: row;gap: 8px;cursor: pointer`}>
                    <i class="fa-solid fa-arrow-left-long"></i>
                    Back
                </div>
            </Link>
                <div css={gradientText}>Have an account? <a css={css`text-decoration: none;color: rgba(0,0,0,0);`} href="https://app.chedar.fr/">Sign In</a></div>
        </FormHeader>
        <Description css={gradientText}>Your production needs a better story!</Description>
        <div css={container}>
        <FormHeader inner >
            <Link to="/" css={Links}>
                <div css={css`display:flex;align-items:center;flex-direction: row;gap: 8px;cursor: pointer`}>
                    <i class="fa-solid fa-arrow-left-long"></i>
                    Go Back
                </div>
            </Link>
                <div>Have an account? <a css={css`color:#9EA0A5`} href="https://app.chedar.fr/">Sign In</a></div>
        </FormHeader>

        <FormSection>
            <Form onSubmit={handleSubmit(onsubmit)}>
                <FormTitle>
                    <FormTitleHeader>Sign up to Chedar</FormTitleHeader>
                    <FormTitleSubheader>You are signing up as a Freelancer</FormTitleSubheader>
                </FormTitle>

                <FormContent>
                    {errors.fullname && <ErrorMessage>{errors.fullname.message}</ErrorMessage>}
                    <InputWrapper>
                        <Input name="fullname" ref={register({required: {value: true, message: "Full name is required."}})} onChange={handleChange} focused={fullNameFocus} onFocus={()=>setFullNameFocus(true)} onBlur={()=>setFullNameFocus(false)} placeholder="Full Name" />
                        <Label inputLength={fullNameLength}>Full Name</Label>
                    </InputWrapper>
                    
                    {errors.company && <ErrorMessage>{errors.company.message}</ErrorMessage>}
                    <InputWrapper>
                        <Input name="company" ref={register({required: {value: true, message: "Company is required."}})} onChange={handleChange} focused={companyFocused} onFocus={()=>setCompanyFocused(true)} onBlur={()=>setCompanyFocused(false)} placeholder="Company" />
                        <Label inputLength={companyLength}>Company</Label>
                    </InputWrapper>

                    {errors.email && errors.email.type === "required" && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    {errors.email && errors.email.type === "pattern" && <ErrorMessage pattern>{errors.email.message}</ErrorMessage>}
                    <InputWrapper>
                        <Input name="email" ref={register({required: {value: true, message: "Email is required."}, pattern: {value: /^.+@.+\.c?o?m?f?r?g?$/i, message: "Invalid email format."}})} onChange={handleChange} focused={emailFocused} onFocus={()=>setEmailFocused(true)} onBlur={()=>setEmailFocused(false)} placeholder="Email Address" />
                        <Label inputLength={emailLength}>Email Address</Label>
                    </InputWrapper>

                    {errors.phonenumber && <ErrorMessage>{errors.phonenumber.message}</ErrorMessage>}
                    <InputWrapper>
                        <Input name="phonenumber" ref={register({required: {value: true, message: "Phone number is required."}})} onChange={handleChange} focused={phoneFocused} onFocus={()=>setPhoneFocused(true)} onBlur={()=>setPhoneFocused(false)} placeholder="Phone Number" />
                        <Label inputLength={phoneLength}>Phone Number</Label>
                    </InputWrapper>

                    <CheckboxWrapper>
                        <input style={{display: "none"}} type="checkbox" name="terms_conditions" ref={register({required: true})} checked={checked} />
                        <Checkbox onClick={()=>{setChecked(!checked);}} checked={checked}><img css={css`width: 90%;padding-left: 1px;`} src={CheckedIcon} alt="Checked" /></Checkbox><CheckboxLabel onClick={()=>setChecked(!checked)}>I have read the <a css={css`color:#56575A;`} href="https://chedar.io/en/terms-and-conditions">Terms and Conditions.</a></CheckboxLabel>
                    </CheckboxWrapper>

                    <SubmitButtonDiv><SubmitButton type="submit" value="Sign up now"/></SubmitButtonDiv>

                </FormContent>
            </Form>

            <ImagePreviewSection>
                <Description inner css={gradientText}>Don't be afraid,<br />we just need some info about you</Description>
                <img css={ImagePreview} src={Image} alt=""/>
            </ImagePreviewSection>
        </FormSection>
    </div>
    </div>
)
}

export default SignupFreelancer