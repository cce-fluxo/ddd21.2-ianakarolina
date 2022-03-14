import React from 'react';
import {ActivityIndicator} from 'react-native'
import colors from '../../constants/colors'

import {Container, ButtonText} from './styles'

const Button = ({width,height,text,backgroundcolor,radius,margintop,border,onPress,loading,disabled}) => {
    return <Container 
                width={width} 
                height={height} 
                backgroundcolor={backgroundcolor} 
                radius={radius} 
                margintop={margintop} 
                border={border}
                onPress={onPress}
                disabled = {disabled || loading}>
        {loading ? (<ActivityIndicator size={'small'} color={colors.background}/>) : (<ButtonText>{text}</ButtonText>)}
    </Container>
}

export default Button;
