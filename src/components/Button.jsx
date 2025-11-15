import styled from 'styled-components';

const Input = styled.input`
    padding: 10px;
    width: 100%;
    border-style: none;
    background-color: ${({theme}) => theme.button};
    color: #fff;
    font-weight: bold;
    font-size: 1em;
    border-radius: 3px;
    cursor: pointer;

    &:active{
        background-color: #fc3;
    }
`;

export default function Button({onClick, children, submit}){
    return <Input type={submit? "submit" : 'button'} value={children} onClick={onClick}/>
    
}