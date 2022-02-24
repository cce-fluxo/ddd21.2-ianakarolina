import styled from "styled-components/native";
import colors from "../../constants/colors";


export const Container = styled.ScrollView`
    flex:1;
    background-color: ${colors.background};
`;

export const Logo = styled.Image`
    width: 260px;
    height: 260px;
    margin-top: 65px;
    margin-left: 20px;
`;

export const Title = styled.Text`
    font-size: 40px;
    margin-top: -50px;
    margin-bottom: -60px;
`;

export const SignUpButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: ${props=>props.marginleft}px;
    margin-top: ${props=>props.margintop}px;
`;

export const TextButton = styled.Text`
    font-weight: 400;
    font-style: ${props=>props.fontstyle};
    font-size: 18px;
    margin-left: 2px;
    margin-top:20px;
    text-decoration: ${props=>props.textdecoration};
    color: ${colors.secundaria};
`;

export const OrText = styled.Text`
    font-size: 17px;
    align-self: center;
    color: #A2A2A2;
    margin-top: 18px;
    justify-content: center;
`;
