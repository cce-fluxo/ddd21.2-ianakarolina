import React from 'react'
import { 
        Container, 
        Title,
        Logo,
        Text,
    } from './styles'

import Button from '../../components/Button'
import Input from '../../components/Input'
import SilverLogo from '../../assets/Logo.png'
import {TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native'
import {screenHeight, screenWidth} from '../../constants/dimensions'
import colors from '../../constants/colors'

const SignUp = ({fontsize,fontweight,navigation}) => {
    const navigateToLogin = () => {
        navigation.navigate('SignIn')
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex:1, backgroundColor: `${colors.background}` }}
        >   
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} style={{flex:1, backgroundColor: `${colors.background}` }}>
                <Container contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false}> 
                    <Logo resizeMode='contain' source={SilverLogo}/>
                    <Text fontsize={17} fontweight={'bold'}>Silver Motors ID</Text>
                    <Text fontsize={28} fontweight={'100'}>Registrar</Text>
                    <Text fontsize={15} fontweight={'100'}>Crie sua nova conta Silver Motors</Text>
                    <Input width={screenWidth*0.8} placeholder='E-mail*' margintop={30}/>
                    <Input width={screenWidth*0.8} placeholder='Senha*' margintop={13}/>
                    <Input width={screenWidth*0.8} placeholder='Repetir Senha*' margintop={13}/>
                    <Input width={screenWidth*0.8} placeholder='CPF*' margintop={13}/>
                    <Input width={screenWidth*0.8} placeholder='Endereço*' margintop={13}/>
                    <Button onPress={navigateToLogin} text='Registrar-se' width={screenWidth*0.67} height={50} backgroundcolor={colors.silverMotors} border={'none'} radius={30} margintop={50} />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default SignUp
