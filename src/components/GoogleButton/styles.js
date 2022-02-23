import styled from "styled-components/native";
import Colors from '../../constants/colors';

export const Container = styled.TouchableOpacity`
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    align-items: center;
    align-self: center;
    justify-content: center;
    background-color: ${props=>props.backgroundcolor};
    border-radius:  ${props=>props.radius}px;
    margin-top: ${props=>props.margintop}px;
    border: ${props=>props.border};
`; 

export const ButtonText = styled.Text`
    font-size: 15px;
    font-weight: 800;
    text-align: center;
    color: ${Colors.secundaria};
`;
