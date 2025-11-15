import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    align-items: center;
    background-color: ${({theme}) => theme.container};
    padding: 20px;
    height: 80%;
    width: 320px;
    border-radius: 3px;
    box-shadow: 1px 1px 1px 1px ${({theme}) => theme.shadow};
`;

export default Form;