import React from 'react'
import colors from '../../constants/colors';
import {InputText} from './styles'

const Input = props => {
    return (
    <InputText width={props.width} 
               placeholder={props.placeholder} 
               selectionColor={colors.secundaria} 
               margintop={props.margintop}
               secureTextEntry={props.secureTextEntry}
               value={props.value}
               onChangeText={props.onChangeText}
               autoComplete={props.autoComplete}
               keyboardType={props.keyboardType}
               autoCapitalize={props.autoCapitalize}/>
    );
};

export default Input;
