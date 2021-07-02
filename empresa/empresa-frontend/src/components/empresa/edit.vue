<template>
   <div>
        <div class="form-group row" v-bind:style="{ 'margin-left': 60 + 'px'}">
          <br>
          <form id="create-post-form" @submit.prevent="editEmpresa">
               <div class="form-group row ">
                <label for="title"> Nome da Empresa </label>
                <input type="text" id="nome" v-model="empresa.nome" name="title" class="form-control" placeholder="Nome da Empresa">
               </div>
               <br>
               <div class="form-group row ">
                <label for="title"> Telefone </label>
                <input type="text" id="telefone" v-model="empresa.telefone" name="title" class="form-control" placeholder="Telefone da Empresa">
               </div>
            <br>
               <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Está ativa?</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="empresa.estaAtiva" id="radioSim" value="Sim">
          <label class="form-check-label" for="radioSim">
            Sim
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="empresa.estaAtiva" id="radioNao" value="Não">
          <label class="form-check-label" for="radioNao">
            Não
          </label>
        </div>
      </div>
    </div>
  </fieldset>
              <br>
              <div class="form-group col-md-4 pull-right">
              <br>
              <br>
                  <button class="btn btn-success" type="submit"> Editar Empresa </button>
              </div> 
             </form>
        </div>
    </div>
</template>
<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      empresa: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getEmpresa();
  },
  methods: {
    editEmpresa() {
      let empresaData = {
        nome: this.empresa.nome,
        telefone: this.empresa.telefone,
        estaAtiva: this.empresa.estaAtiva
      };
      axios
        .put(
          `${server.baseURL}/empresa/editar?empresaID=${this.id}`,
          empresaData
        )
        .then(data => {
          router.push({ name: "home" });
          data;
        });
    },
    getEmpresa() {
      axios
        .get(`${server.baseURL}/empresa/empresa/${this.id}`)
        .then(data => (this.empresa = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>