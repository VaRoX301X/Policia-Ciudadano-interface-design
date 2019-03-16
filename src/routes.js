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
import editarPolicia from "./components/policia/editarPolicia";
import verAtestados from "./components/policia/atestados/verAtestados";
import verAtestado from "./components/policia/atestados/verAtestado";
import nuevoAtestado from "./components/policia/atestados/nuevoAtestado";
import generarDenunciaPolicia from "./components/policia/denuncias/generarDenunciaPolicia";
import verDenunciasPolicia from "./components/policia/denuncias/verDenunciasPolicia";
import verDenunciaPolicia from "./components/policia/denuncias/verDenunciaPolicia";
import editarDenunciaPolicia from "./components/policia/denuncias/editarDenunciaPolicia";

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
  { path: '/policia/:id_policia', name: 'policia', component: policia},
  { path: '/eeditarpolicia/:id_policia', name: 'ePolicia', component: editarPolicia},
  { path: '/loginPolicia', name: 'lPolicia', component: loginPolicia},
  { path: '/policia/:id_policia/veratestados', name: 'atestados', component: verAtestados},
  { path: '/policia/:id_policia/atestado/:id_atestado', name: 'verAtestado', component: verAtestado},
  { path: '/policia/:id_policia/nuevoAtestado', name: 'nuevoAtestado', component: nuevoAtestado},
  { path: '/alerta', name: 'alerta', component: alerta},
  { path: '/policia/:id_policia/generarDenuncia', name: 'gDenunciaP', component: generarDenunciaPolicia},
  { path: '/policia/:id_policia/verDenuncias', name: 'vDenunciasP', component: verDenunciasPolicia},
  { path: '/policia/:id_policia/verDenuncia/:denunciaId', name: 'vDenunciaP', component: verDenunciaPolicia},
  { path: '/policia/:id_policia/editarDenuncia/:denunciaId', name: 'eDenunciaP', component: editarDenunciaPolicia},
]
