<template>
  <div class="container-fluid mt-banner mb-5">
    <div class="row justify-content-between">
      <div class="col-5 col-info blue-5">
        <h1 class="bold ">Tuboplus Hidráulico (PP-R)</h1>
        <h4 class="my-4" v-html="subTitle"></h4>
        <p class="fs20" v-html="definition"></p>
        <a class="rtp-btn hvr-forward my-4 " href=""
          >Solicita más información<img src="" alt=""
        /></a>
      </div>

      <img
        class="col-6 px-0"
        src="/imagenes/soluciones-residenciales/producto/tuboplus-hidraulico-pprresize.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subTitle:
        '<p class=" light lh-sm">Por ti, renovamos <span class="bold">la imagen de Tuboplus®</span></p>',
      definition:
        '<p class=" lh-sm">Tuboplus® es la línea de conducción hidráulica de Rotoplas. Es un sistema integral de PP-R (Polipropileno Copolímero Random) que permite que la tubería sea más durable, resistente y ligera contra la tubería tradicional.<br><br>La materia prima de Tuboplus es el Polipropileno Copolímero Random (PP-R), un material de vanguardia desarrollado en Alemania para la conducción de agua a altas presiones y temperaturas extremas (fría o caliente). Por su alta calidad, el PP-R ofrece gran durabilidad y flexibilidad, manteniendo las propiedades de la tubería y haciendo posible la termofusión perfecta entre tubos y conexiones, ofrece las uniones más seguras. El PP-R supera ampliamente las condiciones de operación para cualquier tipo de vivienda y gran parte de las instalaciones industriales, en presencia de temperaturas y presiones elevadas.</p>',
    };
  },
};
</script>

<style scoped>
.col-info {
  margin-left: 100px !important;
  padding-right: 70px ;
}

.image {
  max-width: 500px!important;
  height: 500px !important;
}


</style>
