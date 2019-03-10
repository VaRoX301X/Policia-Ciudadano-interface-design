import mainPage from "./components/mainPage";
import registrarPolicia from "./components/registrarPolicia";
import mostrarTodo from "./components/mostrarTodo";
import loginCiudadano from "./components/ciudadano/loginCiudadano";

export default [
  { path: '*', component: mainPage},
  { path: '/', component: mainPage},
  { path: '/registrarPolicia', component: registrarPolicia},
  { path: '/mostrarTodo', component: mostrarTodo},
  { path: '/ciudadano', component: loginCiudadano}
]
