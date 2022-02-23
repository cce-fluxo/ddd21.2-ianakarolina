import styled from "styled-components/native";
import colors from "../../constants/colors";

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.background};
    align-items: center;
`;

export const Logo = styled.Image`
    width: 133px;
    height: 133px;
    align-items: center;
    margin-top: 80px;
    margin-left: 20px;
`;

export const Text = styled.Text`
    font-size: ${props=>props.fontsize}px;
    font-weight: ${props=>props.fontweight};
    color: ${colors.texto};
    align-self: flex-start;
    margin-top: 10px;
    margin-left: 20px;
`;
