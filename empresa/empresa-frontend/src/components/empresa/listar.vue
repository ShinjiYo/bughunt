       
       <template>
    <div class="container-fluid">
      <div class="text-center">
        <h1>Empresas Cadastradas</h1>
       <div v-if="empresas.length === 0">
            <h2> Sem empresas para mostrar no momento </h2>
        </div>
      </div>

        <div>
            <table class="table table-striped table-dark " v-bind:style="{ 'width': 800 + 'px', 'margin-left': 500 + 'px'}">
                <tr>
                  <th  scope="col">Nome</th>
                  <th  scope="col">Telefone</th>
                  <th  scope="col">Está Ativa?</th>
                </tr>
              <tbody>
                <tr v-for="empresa in empresas" :key="empresa._id">
                  <td>{{ empresa.nome }}</td>
                  <td>{{ empresa.telefone }}</td>
                  <td>{{ empresa.estaAtiva }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'Editar', params: {id: empresa._id}}" class="btn btn-primary " v-bind:style="{'position':absolute,
                                   'margin-left': 250 + 'px', 'margin-right': 20 + 'px'}">Editar Empresa </router-link>
                                  <button class="btn btn-primary" v-on:click="deleteEmpresa(empresa._id)">Deletar Empresa</button>
                                </div>
                              </div>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
    </div>
    </template>

<script>
import { server } from "../../helper";
import axios from "axios";
export default {
  data() {
    return {
      empresas: []
    };
  },
  created() {
    this.fetchEmpresas();
  },
  methods: {
    fetchEmpresas() {
      axios
        .get(`${server.baseURL}/empresa/empresas`)
        .then(data => (this.empresas = data.data));
    },
    deleteEmpresa(id) {
      axios
        .delete(`${server.baseURL}/empresa/deletar?empresaID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>