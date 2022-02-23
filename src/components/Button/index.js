import React from 'react';

import {Container, ButtonText} from './styles'

const Button = ({width,height,text,backgroundcolor,radius,margintop,border,onPress}) => {
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

export default Button;
