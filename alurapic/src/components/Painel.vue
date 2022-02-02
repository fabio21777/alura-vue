<template>
  <div class="painel">
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">
      {{ tituloFoto }}
    </h2>
    <transition name="painel-fade">
      <div class="painel-corpo" v-show="visivel">
        <slot> </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Painel",

  props: ["tituloFoto"],

  data() {
    return {
      visivel: true
    };
  }
};
</script>
<style scoped>
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
}
.img {
  width: 100%;
}

.painel-fade-enter,
.painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-enter-active,
.painel-fade-leave-active {
  transition: opacity 0.4s;
}
</style>
