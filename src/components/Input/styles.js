import styled from "styled-components/native";

export const InputText = styled.TextInput`
    width: ${props=>props.width}px;
    height: 50px;
    background-color: #E5E5E5;
    border-radius: 5px;
    padding-left: 10px;
    align-self: center;
    margin-top: ${props=>props.margintop}px;
`;
