import mainPage from "./components/mainPage";
import registrarPolicia from "./components/policia/registrarPolicia";
import mostrarTodo from "./components/mostrarTodo";
import loginCiudadano from "./components/ciudadano/loginCiudadano";
import registrarCiudadano from "./components/ciudadano/registrarCiudadano";
import generarDenuncia from "./components/generarDenuncia";
import loginPolicia from "./components/policia/loginPolicia";
import alerta from "./components/varios/alerta";

export default [
  { path: '*', name: '*', component: mainPage},
  { path: '/', name: 'Home', component: mainPage},
  { path: '/registrarPolicia', name: 'regPolicia', component: registrarPolicia},
  { path: '/mostrarTodo', name: 'mTodo', component: mostrarTodo},
  { path: '/loginCiudadano', name: 'lCiudadano', component: loginCiudadano},
  { path: '/registrarCiudadano', name: 'rCiudadano', component: registrarCiudadano },
  { path: '/generardenuncia', name: 'gDenuncia', component: generarDenuncia},
  { path: '/loginPolicia', name: 'lPolicia', component: loginPolicia},
  { path: '/alerta', name: 'alerta', component: alerta}
]
