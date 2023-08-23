<template>
  <div class="">
    <NuxtLink
      :to="datos.link"
      class="card carrusel-servicios-nodo mb-4"
    >
      <img class="carrusel-servicios-icono" src="/imagenes/comun/icon-plus.svg" alt="Icono +">
      <img
        :src="datos.image"
        class="card-img-top"
      />
      <div
        class="card-body carrusel-servicios-texto text-white text-center bg-black"
      >
        <p class="blue-2">{{datos.title}}</p>
        <p>{{datos.subTitle}}</p>
      </div>
    </NuxtLink>

    <!-- <a href="" class="carrusel-servicios-nodo">
      <img
        class="carrusel-servicios-imagen"
        src="/imagenes/soluciones-residenciales/soluciones-residenciales-tuboplus.jpg"
        alt="Imagen Soluciones Residenciales"
      />
      <img
        class="carrusel-servicios-icono"
        src="/imagenes/comun/icon-plus.svg"
        alt="Icono +"
      />
      <div class="carrusel-servicios-texto text-white text-center bg-black">
        <p class="blue-2">Tuboplus® Hidráulico (PP-R)</p>
        <p>Suministro baja presión</p>
      </div>
    </a> -->
  </div>
</template>

<script>
export default {
  props: { datos: Object },
  data() {
    return {
      info: {
        image: "",
        title: "",
        subTitle: "",
        link: "",
      },
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.carrusel-servicios-nodo {
  position: relative;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
}
.carrusel-servicios-imagen {
  width: 100%;
}
.carrusel-servicios-icono {
  width: 30px;
  position: absolute;
  top: 20;
  right: 0;
}
.carrusel-servicios-texto {
  padding: 1rem;
}
.carrusel-servicios-texto p {
  margin: 0;
}
</style>
