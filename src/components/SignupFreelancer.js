/* eslint-disable default-case */
/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import {useForm} from 'react-hook-form';
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {Link, useNavigate} from "react-router-dom";
import CheckedIcon from "../assets/check.svg";

const breakpoints = [614, 525, 340, 480];
const mediaQuery = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

const container = css`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 30px;
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
    width: calc(50% - 20px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
        font-size: 0.9rem
    }
    ${mediaQuery[2]}{
        font-size: 0.7rem;
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
    border: ${props => props.focused? "2px solid #6200EE":"1px solid rgba(0, 0, 0, 0.32)"};
    border-radius: 4px;
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
    &::before{
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
`;

const SubmitButton = styled("input")`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 4px;
    background: ${props => props.valid? "#364C63":"#9EA0A5"};
    text-align: center;
    color: #fff;
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    cursor: pointer
`;

const Links = css`text-decoration: none;color: unset`;

const ImagePreview = css`
    width: 100%;
    ${mediaQuery[mediaQuery.length - 1]}{
        width: 50%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 15px;
    }
`;

const ErrorMessage = styled("p")`
    color: #cc0c00;
    font-size: 0.8rem;
    margin-bottom: -15px;
    margin-left: 5px;
    margin-top: -10px;
`;

function SignupFreelancer() {
    const [firstNameFocused, setFirstNameFocused] = useState(false);
    const [lastNameFocused, setLastNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [phoneFocused, setPhoneFocused] = useState(false);

    const [firstNameLength, setFirstNameLength] = useState(0);
    const [lastNameLength, setLastNameLength] = useState(0);
    const [emailLength, setEmailLength] = useState(0);
    const [phoneLength, setPhoneLength] = useState(0);
    const [checked, setChecked] = useState(false);

    const {register, handleSubmit, formState:{errors}, clearErrors} = useForm();

    function handleChange(event){
        switch(event.target.name){
            case "firstname":
                setFirstNameLength(event.target.value.length);
                clearErrors(event.target.name);
                break;
            case "lastname":
                setLastNameLength(event.target.value.length);
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
        navigate("/thankyou-f");
        console.log(data);
    }
        
    return (
    <div css={[background, container]}>
        <FormHeader>
            <Link to="/" css={Links}>
                <div css={css`display:flex;align-items:center;flex-direction: row;gap: 8px;cursor: pointer`}>
                    <img src={require("../assets/back.png")} alt="Back Button" css={css`height: 11px;`}/>
                    Go Back
                </div>
            </Link>
                <div>Have an account? <a css={css`color:#9EA0A5`} href="">Sign In</a></div>
        </FormHeader>

        <FormSection>
            <Form onSubmit={handleSubmit(onsubmit)}>
                <FormTitle>
                    <FormTitleHeader>Sign up to Chedar</FormTitleHeader>
                    <FormTitleSubheader>You are signing up as a Freelancer</FormTitleSubheader>
                </FormTitle>

                <FormContent>
                    {errors.firstname && <ErrorMessage>{errors.firstname.message}</ErrorMessage>}
                    <InputWrapper>
                        <Input name="firstname" ref={register({required: {value: true, message: "Firstname is required."}})} onChange={handleChange} focused={firstNameFocused} onFocus={()=>setFirstNameFocused(true)} onBlur={()=>setFirstNameFocused(false)} placeholder="First Name" />
                        <Label inputLength={firstNameLength}>First Name</Label>
                    </InputWrapper>

                    {errors.lastname && <ErrorMessage>{errors.lastname.message}</ErrorMessage>}
                    <InputWrapper>
                        <Input name="lastname" ref={register({required: {value: true, message: "Lastname is required."}})} onChange={handleChange} focused={lastNameFocused} onFocus={()=>setLastNameFocused(true)} onBlur={()=>setLastNameFocused(false)} placeholder="Last Name" />
                        <Label inputLength={lastNameLength}>Last Name</Label>
                    </InputWrapper>
                    
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    <InputWrapper>
                        <Input name="email" ref={register({required: {value: true, message: "Email is required."}})} onChange={handleChange} focused={emailFocused} onFocus={()=>setEmailFocused(true)} onBlur={()=>setEmailFocused(false)} placeholder="Email Address" />
                        <Label inputLength={emailLength}>Email Address</Label>
                    </InputWrapper>
                    
                    {errors.phonenumber && <ErrorMessage>{errors.phonenumber.message}</ErrorMessage>}
                    <InputWrapper>
                        <Input name="phonenumber" ref={register({required: {value: true, message: "Phone number is required."}})} onChange={handleChange} focused={phoneFocused} onFocus={()=>setPhoneFocused(true)} onBlur={()=>setPhoneFocused(false)} placeholder="Phone Number" />
                        <Label inputLength={phoneLength}>Phone Number</Label>
                    </InputWrapper>

                    <CheckboxWrapper>
                        <input style={{display: "none"}} type="checkbox" name="terms_conditions" ref={register({required: true})} checked={checked} />
                        <Checkbox onClick={()=>setChecked(!checked)} checked={checked}><img css={css`width: 90%;padding-left: 1px;`} src={CheckedIcon} alt="Checked" /></Checkbox><CheckboxLabel onClick={()=>setChecked(!checked)}>I have read the <a css={css`color:#56575A;`} href="">Terms and Conditions.</a></CheckboxLabel>
                    </CheckboxWrapper>

                    <SubmitButton type="submit" value="Sign up now" valid={checked}/>

                </FormContent>
            </Form>
            <div css={css`flex:1;`}>
                <img css={ImagePreview} src={require("../assets/signup-freelancer.png")} alt=""/>
            </div>
        </FormSection>
    </div>
)
}

export default SignupFreelancer