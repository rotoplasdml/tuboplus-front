<template>
  <div class="container-fluid">
    <div class="row text-center pb-5">
      <h2 class="bold blue-5">Enterate de las últimas novedades</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-3" v-for="(novedad, i) in novedades" :key="i">
        <CardNovedades :novedades="novedad" />
      </div>
    </div>
  </div>
</template>

<script>
import CardNovedades from "./CardNovedades.vue";
export default {
  components: { CardNovedades },
  data() {
    return {
      novedades: {
        novedad1: {
          image: "/imagenes/novedades/ultimas-noveadaes-1.jpg",
          title:
            "La importancia de contar con tubería contra incendios: Protegiendo vidas y bienes en caso de emergencia",
          text: "En la industria, el comercio y en oficinas es obligatorio el contar con sistemas contra incendios. Ya sea que se trate de extintores ubicados en diferentes zonas, mangueras contra incendios o tubería contra",
        },
        novedad2: {
          image: "/imagenes/novedades/ultimas-noveadaes-2.jpg",
          title:
            "¿Sabías que existen tipos de tuberías para cada sistema de agua?",
          text: "La instalación de la tubería adecuada para cada sistema de agua es primordial para que pueda funcionar con la mejor eficiencia posible.",
        },
        novedad3: {
          image: "/imagenes/novedades/ultimas-noveadaes-3.jpg",
          title:
            "Conoce lo nuevo de Tuboplus: la tubería verde de PPR para agua más famosa de México",
          text: "Si buscas opciones para reemplazar viejas tuberías de agua, seguramente has visto una tubería verde para agua en tu ferretería más cercana.",
        },
      },
    };
  },
};
</script>

<style scoped></style>
