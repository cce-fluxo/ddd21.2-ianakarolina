import React, {useState} from 'react'
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [CPF, setCPF] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [address, setAddress] = useState('');
    const [CEP, setCEP] = useState('');
    const [complemento, setComplemento] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmite = async () => {
        setLoading(true);
        try{
        const data = {
            email: email,
            password: password,
            CPF: CPF,
            cellphone: cellphone,
            address: address,
            CEP: CEP,
            complemento: complemento,
        };
        // const response = await api.post("/cadastro",data);
        console.log(response.data)
        } catch (err){
            console.log("erro")
        }
        setLoading(false);
    };

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
                    <Input width={screenWidth*0.8} 
                           placeholder='Nome*' 
                           margintop={30}
                           autoCapitalize='words'/>
                    <Input width={screenWidth*0.8} 
                           placeholder='E-mail*' 
                           margintop={13}
                           keyboardType='email-address'
                           autoComlete='email'/>
                    <Input width={screenWidth*0.8} 
                           placeholder='Senha*' 
                           margintop={13}
                           secureTextEntry/>
                    <Input width={screenWidth*0.8} 
                           placeholder='Repetir Senha*' 
                           margintop={13}
                           secureTextEntry/>
                    <Input width={screenWidth*0.8} 
                           placeholder='CPF*' 
                           margintop={13}
                           autoComlete='cc-number'/>
                    <Input width={screenWidth*0.8} 
                           placeholder='Telefone*' 
                           margintop={13}
                           autoComlete='tel'/>
                    <Input width={screenWidth*0.8} 
                           placeholder='Endereço*' 
                           margintop={13}
                           autoComlete='postal-address'/>
                    <Input width={screenWidth*0.8} 
                           placeholder='CEP*' 
                           margintop={13}
                           autoComlete='postal-address'/>
                    <Input width={screenWidth*0.8} 
                           placeholder='Complemento*' 
                           margintop={13}
                           autoComlete='postal-address'/>
                    <Button onPress={handleSubmite} text='Registrar-se' width={screenWidth*0.67} height={50} backgroundcolor={colors.silverMotors} border={'none'} radius={30} margintop={50} />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default SignUp
