import styled from "styled-components";

export const HeaderWrapper = styled.div`
    background-color: #EDEDED;
    height: 6em;
`
export const SecondaryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
`
export const CloseIconImg = styled.img`
    height: 2em;
    grid-column: 1/2;
    margin-top: .9em;
    margin-left: -5em;
`
export const LogoImg = styled.img`
    height: 4em;
    grid-column: 2/3;
    margin-top: .9em;
`
export const Btn = styled.button`
    color: #4088CB;
    font-size: 2.3em;
    font-weight: 600;
    line-height: 1em;
    font-family: 'Noto Sans', sans-serif;
    border: none;
    grid-column: 3/4;

    &:active{
        text-decoration: underline;
    }
`