<template>
  <div class="body">
    <button @click="confirmed" class="botao"  :class="estilizar" :type="type">{{titulo}}</button>
  </div>

</template>

<script>

export default {
  name: "Button",
  props:{
    titulo:{
      type:String,
      default:"",
      required:true
    },

    type:{
      type:String,
      default:"button",
      required:false
    },

    estilo:{
      type:String,
      default:"padrao",
      required:false
    },

    confirma:{
      type:Boolean,
      default:false,
      required:false
    }
  },


  data() {
    return {};
  },
  components: {
  },
  methods: {
    confirmed() {
      if(this.confirma){
        if(confirm("Confirma?")){
          this.$emit("botao-clicado");
        }
        return;
      }
      this.$emit("botao-clicado");
    }
  },
  created() {},
  computed: {
    estilizar(){
      if(this.estilo ==="perigo" ) return "botao-perigo";

      if(this.estilo ==="padrao" || !this.estilo) return "botao-padrao";

    }
  }
};
</script>

<style scoped>
.botao {
        display: inline-block;
        padding: 20px;
        border-radius: 3px;
        margin: 20px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>
