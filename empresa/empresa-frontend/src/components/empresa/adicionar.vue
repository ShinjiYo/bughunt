<template>
   <div>
        <div class="form-group row" v-bind:style="{ 'margin-left': 60 + 'px'}">
          <br>
          <form id="create-post-form" @submit.prevent="createEmpresa">
               <div class="form-group row ">
                <label for="title"> Nome da Empresa </label>
                <input type="text" id="nome" v-model="nome" name="title" class="form-control" placeholder="Nome da Empresa">
               </div>
               <br>
               <div class="form-group row ">
                <label for="title"> Telefone </label>
                <input type="text" id="telefone" v-model="telefone" name="title" class="form-control" placeholder="Telefone da Empresa">
               </div>
            <br>
               <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Está ativa?</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="estaAtiva" id="radioSim" value="Sim">
          <label class="form-check-label" for="radioSim">
            Sim
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="estaAtiva" id="radioNao" value="Não">
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
                  <button class="btn btn-success" type="submit"> Criar Empresa </button>
              </div> 
             </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      nome: "",
      telefone: "",
      estaAtiva: ""
    };
  },
  methods: {
    createEmpresa() {
      let empresaDados = {
        nome: this.nome,
        telefone: this.telefone,
        estaAtiva: this.estaAtiva
      };
      this.__submitToServer(empresaDados);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/empresa/adicionar`, data).then(data => {
        router.push({ name: "home" });
        data;
      });
    }
  }
};
</script>