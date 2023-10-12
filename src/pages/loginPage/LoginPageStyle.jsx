import styled from "styled-components";

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15em;
`
export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const LogoImg = styled.img`
    height: 24em;
    margin-bottom: -1em;
`
export const LogoHeader = styled.h3`
    text-align: left;
    font-weight: 300;
    font-size: 2em;
    line-height: 2.5em;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #000000;
`
export const FormArticle = styled.article`
    margin-top: 15em;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
`
export const EmailSection = styled.section`
    width: 50em;
    height: 7em;
    margin-bottom: 1.5em;
`
export const Input = styled.input`
    width: 99%;
    height: 99%;
    border: solid .5px rgb(188, 184, 184);
    border-radius: .4em;
`
export const PasswordSection = styled.section`
    width: 51.5em;
    height: 7.2em;
    margin-bottom: 7em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
export const VisibilityBtn = styled.div`
    position: absolute;
    right: 7em;
    top: 69.6em;
    
    .fa-eye-slash,
    .fa-eye{
        color: #cdcaca;
        scale: 1.8;
    }
`
export const LoginBtn = styled.button`
    height: 3em;
    width: 22em;
    border-radius: 6em;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: none;
    color: #FFFFFF;
    font-size: 2.3em;
    font-weight: 700;
    line-height: 2.5em;
    font-family: 'IBM Plex Sans', sans-serif;

    &:active{
        transform: scale(1.1);
        transition: all ease .5s;
    }
`
export const Divisor = styled.div`background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    height: .2em;
    width: 49.8em;
    margin: 2em 0;
`
export const SignupBtn = styled.button`
    height: 3em;
    width: 22em;
    border-radius: 6em;
    border: .08em solid #FE7E02;
    background-color: #FFFFFF;
    color: #FE7E02;
    font-size: 2.3em;
    font-weight: 700;
    line-height: 2.5em;
    font-family: 'IBM Plex Sans', sans-serif;

    &:active{
        transform: scale(1.1);
        transition: all ease .5s;
    }
`
export const ErrorMessage = styled.div`
    margin: -4.6em 0 .8em 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    & p{
        color: red;
        font-size: 1.6em;
        font-weight: 700;
        line-height: 1.8em;
        font-family: 'IBM Plex Sans', sans-serif;
    }
`