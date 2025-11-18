import styled from 'styled-components';
import inputStyle from './shared-styles/inputStyle';

const Div = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`;
const Input = styled.input`
    ${inputStyle}
`;
const TextArea = styled.textarea`
    ${inputStyle}
    font-family: Arial;
`;
const Label = styled.label`
    margin-right: 5px;
    margin-bottom: 5px;
    color: ${({theme}) => theme.text1};
`;

export default function Field({label="", type="text", value, inputRef, onChange, placeholder}){

    const input = <Input 
                    type={type}
                    value={value}
                    onChange={onChange}
                    ref={inputRef}
                    id={`i-${label.toLowerCase()}`}
                    name={label.toLowerCase()}
                    />;

    const textArea = <TextArea 
                        value={value}
                        onChange={onChange}
                        ref={inputRef}
                        id={`i-${label.toLowerCase()}`}
                        name={label.toLowerCase()}
                    />;
    return (
        <Div>
            <Label htmlFor={`i-${label.toLowerCase()}`}>
                {`${label}: `}
            </Label>
            {type === "textarea"? textArea : input}
        </Div>
    );
}