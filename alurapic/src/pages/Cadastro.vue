<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="gravar">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" v-model="foto.titulo" autocomplete="off">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" v-model.lazy="foto.url" autocomplete="off">
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" v-model="foto.descricao" autocomplete="off"></textarea>
      </div>

      <div v-show="foto.url">
        <label for="foto" >{{foto.titulo}} </label>
         <img id="foto" class="img"  :src="foto.url"  alt="foto"/>

      </div>


      <div class="centralizado">
        <meu-botao titulo="GRAVAR" type="submit" />
        <router-link to="/"><meu-botao titulo="VOLTAR"  /></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import Botao from '../components/Button.vue';
import Painel from '../components/Painel.vue';
import Foto from '../domain/Foto';
import axios from 'axios';
export default {
  name: "Cadastro",
  components: {

    'meu-botao': Botao,
    'meu-painel': Painel
  },
  data() {
    return {
      foto : new Foto(),

    }
  },
  methods: {
    gravar() {
      axios.post('http://localhost:3000/v1/fotos', this.foto)
        .then(() => {
          this.foto = new Foto();
        })
        .catch(erro => console.log(erro));
    }
  }
}

</script>
<style scoped>

  .centralizado {
    display: flex;
    justify-content: center;

  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

  .img {
    width: 100%;
  }
</style>
