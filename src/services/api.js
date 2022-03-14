import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://silver-motors-karen.herokuapp.com/',
// Alterar esse valor para o url do deploy do back
});

// interceptamos todas as requisições para verificarmos se já existe um token 
api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@token');
  
// caso tenha token configuramos esse para autenticar as requisições
// configuramos o cabeçalho das requisições com: Bearer + token
	if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
