import axios from 'axios';

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/
const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('@airbnb-app:token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    alert(err);
  }
});

export default api;