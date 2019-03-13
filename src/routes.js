import mainPage from "./components/mainPage";
import registrarPolicia from "./components/policia/registrarPolicia";
import mostrarTodo from "./components/mostrarTodo";
import ciudadano from "./components/ciudadano/ciudadano";
import loginCiudadano from "./components/ciudadano/loginCiudadano";
import registrarCiudadano from "./components/ciudadano/registrarCiudadano";
import generarDenuncia from "./components/generarDenuncia";
import policia from "./components/policia/policia";
import loginPolicia from "./components/policia/loginPolicia";
import alerta from "./components/varios/alerta";
import editarCiudadano from "./components/ciudadano/editarCiudadano";

export default [
  { path: '*', name: '*', component: mainPage},
  { path: '/', name: 'Home', component: mainPage},
  { path: '/registrarPolicia', name: 'regPolicia', component: registrarPolicia},
  { path: '/mostrarTodo', name: 'mTodo', component: mostrarTodo},
  { path: '/loginCiudadano', name: 'lCiudadano', component: loginCiudadano},
  { path: '/registrarCiudadano', name: 'rCiudadano', component: registrarCiudadano },
  { path: '/ciudadano/:id_ciudadano', name: 'ciudadano', component: ciudadano},
  { path: '/editarciudadano/:id_ciudadano', name: 'eCiudadano', component: editarCiudadano},
  { path: '/generardenuncia', name: 'gDenuncia', component: generarDenuncia},
  { path: '/policia/id_policia', name: 'policia', component: policia},
  { path: '/loginPolicia', name: 'lPolicia', component: loginPolicia},
  { path: '/alerta', name: 'alerta', component: alerta}
]
