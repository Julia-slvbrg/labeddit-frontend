import styled from "styled-components";

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const LogoImg = styled.img`
    scale: 1;
    margin-top: 40px;
`
export const Header = styled.h3`
    text-align: center;
    font-weight: 300;
    font-size: 16px;
    line-height: 5px;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #000000;
`

export const FormArticle = styled.article`
    margin: 80px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
`

export const EmailSection = styled.section`
    width: 350px;
    height: 45px;
    margin-bottom: 15px;

`
    
export const Input = styled.input`
   width: 99%;
   height: 99%;
    border: solid .5px rgb(223, 221, 221);
    border-radius: 5px;
`

export const PasswordSection = styled.section`
    width: 353px;
    height: 45px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const PasswordInput = styled.input`
    width: 99%;
    height: 99%;  
    border: solid .5px rgb(223, 221, 221);
    border-radius: 5px; 
`

export const VisibilityBtn = styled.div`
    position: absolute;
    right: 50px;

    .fa-eye-slash,
    .fa-eye{
        color: #cdcaca;
    }
`

export const LoginBtn = styled.button`
    height: 50px;
    width: 353px;
    border-radius: 33px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    font-family: 'IBM Plex Sans', sans-serif;
    margin-bottom: 10px;

    &:active{
        transform: scale(1.1);
        transition: all ease .5s;
    }
`

export const Divisor = styled.div`
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    height: 1px;
    width: 353px;
    margin-bottom: 10px;
`

export const SignupBtn = styled.button`
    height: 50px;
    width: 353px;
    border-radius: 33px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    font-family: 'IBM Plex Sans', sans-serif;

    &:active{
        transform: scale(1.05);
        transition: all ease .5s;
    }
`