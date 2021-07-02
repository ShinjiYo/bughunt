import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import EditarEmpresa from '@/components/empresa/edit';
import AdicionarEmpresa from '@/components/empresa/adicionar';
import ListarEmpresas from '@/components/empresa/listar';
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/adicionar', name: 'Adicionar', component: AdicionarEmpresa },
    { path: '/edit/:id', name: 'Editar', component: EditarEmpresa },
    { path: '/empresas', name: 'Empresas', component: ListarEmpresas },
  ]
});