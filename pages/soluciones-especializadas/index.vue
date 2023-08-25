<template>
  <div class="container-fluid">
    <div id="inicio-header" class="row">
      <div class="col-12 p-0">
        <!-- <the-slider :sliderGroupBase="sliderGrupo1"></the-slider>
         -->
        <the-banner :infoBanner="homeBanner"></the-banner>
      </div>
    </div>
    <div class="row py-5 px-5 bg-grey-1">
      <div class="col-3" v-for="(product, i) in products" :key="i">
        <product :datos="product"></product>
      </div>
    </div>
    <div class="row py-5">
      <div class="col-12">
        <TheBim />
      </div>
    </div>
    <div class="row pb-5">
      <div class="col-12">
        <Novedades />
      </div>
    </div>
  </div>
</template>

<script>
import TheBanner from "../../components/HomeComponents/TheBanner.vue";
import TheSlider from "../../components/HomeComponents/TheSlider.vue";
import Product from "../../components/Product.vue";
import TheBim from '../../components/Soluciones/TheBim.vue';
import Novedades from '../../components/Soluciones/Novedades.vue';
export default {
  components: { TheSlider, Product, TheBanner, TheBim, Novedades },
  data() {
    return {
      products: {
        product1: {
          image:
            "/imagenes/soluciones-especializadas/soluciones-especializadas-alta-presion.jpg",
          title: "Tuboplus Alta Presión (PPR-CT)",
          subTitle: "Suministro alta presión",
          link: "/",
        },
        product2: {
          image:
            "/imagenes/soluciones-especializadas/soluciones-especializadas-aire-acondicionado.jpg",
          title: "Tuboplus para Aire Acondicionado",
          subTitle: "Refrigeración / Calefacción",
          link: "/",
        },
        product3: {
          image:
            "/imagenes/soluciones-especializadas/soluciones-especializadas-contra-incendio.jpg",
          title: "Tuboplus Contraincendio (PPR-CT RP+FV)",
          subTitle: "Seguridad",
          link: "/",
        },
        product4: {
          image:
            "/imagenes/soluciones-especializadas/soluciones-especializadas-tuberia-sanitaria.jpg",
          title: "Tuboplus tubería sanitaria",
          subTitle: "Drenaje y desagüe",
          link: "/",
        },
        product5: {
          image:
            "/imagenes/soluciones-especializadas/soluciones-especializadas-herramientas.jpg",
          title: "Herramientas",
          subTitle: "Instrumental",
          link: "/",
        },
      },
      homeBanner: {
        tag: "",
        title: "Soluciones Especializadas",
        subTitle: "",
        definition:
          '<p class="fs-4 light lh-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
        image:
          "/imagenes/soluciones-especializadas/header-soluciones-especializadas.jpg",
        link: "",
        group: "plomeros",
      },
      sliderGrupo1: {
        slide1: {
          tag: "",
          title: "Soluciones Residenciales",
          subTitle: "",
          definition:
            '<p class="fs-4 light lh-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis ratione minus corrupti. Sed quisquam veniam incidunt suscipit minima amet iusto, aut fugiat doloribus saepe omnis unde dolor ipsum debitis.</p>',
          image:
            "/imagenes/soluciones-residenciales/header-soluciones-residenciales.jpg",
          link: "",
          group: "plomeros",
        },
        slide2: {
          tag: "Nuevo",
          title: "Sistema Tuboplus2 Contraincendios",
          subTitle: "",
          definition:
            '<p class="fs-4 light lh-sm">Tubería y accesorios que <span class="bold">garantizan seguridad</span> ante cualquier emergencia</p>',
          image: "/imagenes/inicio/inicio-soluciones-especializadas.jpg",
          group: "industria",
        },
        slide3: {
          tag: "Nuevo",
          title: "Sistema Tuboplus3 Contraincendios",
          subTitle: "",
          definition:
            '<p class="fs-4 light lh-sm">Tubería y accesorios que <span class="bold">garantizan seguridad</span> ante cualquier emergencia</p>',
          image: "/imagenes/inicio/inicio-slide-1.jpg",
          group: "",
        },
      },
    };
  },
};
</script>

<style scoped></style>
