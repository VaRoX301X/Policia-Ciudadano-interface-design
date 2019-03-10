import mainPage from "./components/mainPage";
import registrarPolicia from "./components/registrarPolicia";

export default [
  { path: '*', component: mainPage},
  { path: '/', component: mainPage},
  { path: '/registrarPolicia', component: registrarPolicia}
]
