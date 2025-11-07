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
    border: solid 1px #09f;
    border-radius: 3px;
`;
const Label = styled.label`
    margin-right: 5px;
    margin-bottom: 5px;
    color: #059;
`;

export default function Field({label, type}){
    return (
        <Div>
            <Label htmlFor={`i-${label.toLowerCase()}`}>
                {`${label}: `}
            </Label>
            <Input 
                type={type} 
                id={`i-${label.toLowerCase()}`}
                name={label.toLowerCase()}
                required
            />
        </Div>
    );
}