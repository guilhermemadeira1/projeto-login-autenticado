import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`;
const Input = styled.input`
    padding: 8px;
    width: 100%;
    border: solid 1px ${({theme}) => theme.text1};
    color: ${({theme}) => theme.placeholder};
    font-size: 1em;
    border-radius: 3px;
`;
const Label = styled.label`
    margin-right: 5px;
    margin-bottom: 5px;
    color: ${({theme}) => theme.text1};
`;

export default function Field({label, type, inputRef}){
    return (
        <Div>
            <Label htmlFor={`i-${label.toLowerCase()}`}>
                {`${label}: `}
            </Label>
            <Input 
                type={type}
                ref={inputRef}
                id={`i-${label.toLowerCase()}`}
                name={label.toLowerCase()}
                required
            />
        </Div>
    );
}