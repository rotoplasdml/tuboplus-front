<template>
  <div class="p-3 space">
    <div class="container-fluid">
      <div class="row justify-content-center gx-5">
        <Product class="col-3" />
        <Product class="col-3" />
        <Product class="col-3" />
        <Product class="col-3" />
      </div>
      <div class="row">
        <div class="col-12 p-0">
          <the-slider />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import TheSlider from "../../components/HomeComponents/TheSlider.vue";
export default {
  components: { TheSlider },

  methods: {
    sliderInicio() {
      const swiper = new Swiper(".carrusel-inicio", {
        // * Optional parameters
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        loop: true,
        // * Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next-ci",
          prevEl: ".swiper-button-prev-ci",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    },
    sliderSolucionesResidenciales() {
      const swiper = new Swiper(".carrusel-soluciones-residenciales", {
        // * Optional parameters
        slidesPerView: 1,
        spaceBetween: 32,
        centeredSlides: false,
        loop: true,
        breakpoints: {
          576: {
            slidesPerView: 4,
          },
        },
        // * Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next-sr",
          prevEl: ".swiper-button-prev-sr",
        },
      });
    },
    sliderSolucionesEspecializadas() {
      const swiper = new Swiper(".carrusel-soluciones-especializadas", {
        // * Optional parameters
        slidesPerView: 1,
        spaceBetween: 32,
        centeredSlides: false,
        loop: true,
        breakpoints: {
          576: {
            slidesPerView: 4,
          },
        },
        // * Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next-se",
          prevEl: ".swiper-button-prev-se",
        },
      });
    },
  },
  mounted: function () {
    console.log("inicio:mounted");
    this.sliderInicio();
    this.sliderSolucionesResidenciales();
    this.sliderSolucionesEspecializadas();
  },
};
</script>

<style scoped>
.caja {
  border: solid orange 3px;
  background-color: aqua;
}

.space {
  margin-top: 300px;
}
</style>
