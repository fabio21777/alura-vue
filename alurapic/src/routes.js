import Home from "./pages/Home.vue";
import Cadastro from "./pages/Cadastro.vue";

export const routes = [
{
  path: '/',
  component: Home,
  name: 'Home'
},
{
  path:'/cadastro',
  component: Cadastro,
  name: 'Cadastro'
}
]
