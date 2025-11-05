import styled from 'styled-components';

const style = `
    padding: 10px;
    width: 100%;
    border-style: none;
    background-color: #f90;
    color: #fff;
    font-weight: bold;
    font-size: 1em;
    border-radius: 3px;
    cursor: pointer;

    &:active{
        background-color: #fc3;
    }
`;

const StyledButton = styled.button `${style}`;
const StyledInput = styled.input `${style}`;

export default function Button({onClick, children, submit}){
    if(submit){
        return <StyledInput type="submit" value={children} onClick={(e)=> e.preventDefault()}/>
    }
   return <StyledButton onClick={onClick}>{children}</StyledButton>;
}