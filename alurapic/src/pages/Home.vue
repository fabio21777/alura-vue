<template>
  <div>
    <h1 class="titulo">{{ titulo }}</h1>
    <input type="text" v-model="buscar" />
    <ul class="lista">
      <li
        class="item-lista"
        v-for="(foto, index) in fotosFiltradas"
        v-bind:key="index"
      >
        <Meu-painel :tituloFoto="foto.titulo">
          <img class="img" :src="foto.url" :alt="foto.titulo" />
          <Button
          type = "button"
          titulo = "REMOVER"
          :confirma="true"
          estilo="perigo"
          @botao-clicado="removeFoto(foto)"  ></Button>
        </Meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Painel from "../components/Painel.vue";
import Button from "../components/Button.vue";
export default {
  name: "Home",
  data() {
    return {
      titulo: "AluraPic",
      fotos: [],
      buscar: ""
    };
  },
  components: {
    "Meu-painel": Painel,
    Button
  },
  methods: {
    removeFoto(foto) {
     alert("removendo..."+foto.titulo);
    },

    buscaFotos() {
      axios
        .get("http://localhost:3000/v1/fotos")
        .then(response => (this.fotos = response.data))
        .catch(erro => console.log("erro teste" + erro));
    }
  },
  created() {
    this.buscaFotos();
  },
  computed: {
    fotosFiltradas() {
      if (this.buscar) {
        let regex = new RegExp(this.buscar, "i");
        return this.fotos.filter(foto => regex.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  }
};
</script>

<style scoped>
.titulo {
  text-align: center;
}
.item-lista {
  display: inline-block;
  list-style: none;
  margin: 10px;
}

.body {
  font-family: Helvetica, sans-serif;
}
* {
  box-shadow: 5px, 5px, 10px, grey;
}
.img {
  width: 100%;
}
</style>
