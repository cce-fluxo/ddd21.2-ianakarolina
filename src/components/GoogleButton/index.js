import React from 'react';
import {View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {Container, ButtonText} from './styles'

const GoogleButton = ({width,height,text,backgroundcolor,radius,margintop,border,onPress}) => {
    return <Container 
                width={width} 
                height={height} 
                backgroundcolor={backgroundcolor} 
                radius={radius} 
                margintop={margintop} 
                border={border}
                onPress={onPress}>
        <ButtonText>{text}</ButtonText>
    </Container>
}

export default GoogleButton;
