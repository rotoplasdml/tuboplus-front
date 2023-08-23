<template>
  <div class="swiper carrusel-inicio">
    <!-- Additional required wrapper -->

    <div class="swiper-wrapper" v-if="utmPrincipal == 'residenciales'">
      <!-- Slides -->
      <div
        class="swiper-slide carrusel-inicio-slide"
        v-for="(slide, i) in sliderGroup3"
        :key="i"
      >
        <div class="carrusel-inicio-slide-contenido blue-5 p-3 offset-1">
          <h2 class="bold">
            <span class="blue-2">{{ slide.tag }}</span
            ><br />
            <span>{{ slide.title }}</span
            ><br />
            <span class="light">(PPR-CT retardante)</span>
          </h2>
          <p v-html="slide.definition" class="fs-4 light lh-sm"></p>
          <a class="rtp-btn hvr-forward" href=""
            >Ver más <img src="" alt=""
          /></a>
        </div>
        <img class="d-none d-sm-block w-100" :src="slide.image" alt="Slide 1" />
      </div>
    </div>

    <div class="swiper-wrapper" v-if="utmPrincipal == 'especializadas'">
      <!-- Slides -->
      <div
        class="swiper-slide carrusel-inicio-slide"
        v-for="(slide, i) in sliderGroup2"
        :key="i"
      >
        <div class="carrusel-inicio-slide-contenido blue-5 p-3 offset-1">
          <h2 class="bold">
            <span class="blue-2">{{ slide.tag }}</span
            ><br />
            <span>{{ slide.title }}</span
            ><br />
            <span class="light">(PPR-CT retardante)</span>
          </h2>
          <p v-html="slide.definition" class="fs-4 light lh-sm"></p>
          <a class="rtp-btn hvr-forward" href=""
            >Ver más <img src="" alt=""
          /></a>
        </div>
        <img class="d-none d-sm-block w-100" :src="slide.image" alt="Slide 1" />
      </div>
    </div>

    <div class="swiper-wrapper" v-if="utmPrincipal == 'base'">
      <!-- Slides -->
      <div
        class="swiper-slide carrusel-inicio-slide"
        v-for="(slide, i) in sliderGroupBase"
        :key="i"
      >
        <div class="carrusel-inicio-slide-contenido blue-5 p-3 offset-1">
          <h2 class="bold">
            <span class="blue-2">{{ slide.tag }}</span
            ><br />
            <span>{{ slide.title }}</span
            ><br />
            <span class="light">{{ slide.subTitle }}</span>
          </h2>
          <p v-html="slide.definition" class="fs-4 light lh-sm"></p>
          <a class="rtp-btn hvr-forward" href=""
            >Ver más <img src="" alt=""
          /></a>
        </div>
        <img class="d-none d-sm-block w-100" :src="slide.image" alt="Slide 1" />
      </div>
    </div>

    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev swiper-button-prev-ci"></div>
    <div class="swiper-button-next swiper-button-next-ci"></div>
  </div>
</template>

<script>
export default {
  props: {
    sliderGroupBase: Object,
    sliderGroup2: Object,
    sliderGroup3: Object,
  },
  data() {
    return {
      utmPrincipal: "",
      ej: "hola mi bro",
      sliderGrupo1: {
        slide1: {
          tag: "RESIDENCIAL",
          title: "Sistema Tuboplus1 Contraincendios",
          subTitle: "(PPR-CT retardante)",
          definition:
            '<p class="fs-4 light lh-sm">Tubería y accesorios que <span class="bold">garantizan seguridad</span> ante cualquier emergencia</p>',
          image: "/imagenes/inicio/inicio-slide-1.jpg",
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

      sliderGrupo2: {
        slide1: {
          tag: "INDUSTRIA",
          title: "Sistema Tuboplus1 Contraincendios",
          subTitle: "(PPR-CT retardante)",
          definition:
            '<p class="fs-4 light lh-sm">Tubería y accesorios que <span class="bold">garantizan seguridad</span> ante cualquier emergencia</p>',
          image: "/imagenes/inicio/inicio-slide-1.jpg",
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

      sliderGrupo3: {
        slide1: {
          tag: "BASE",
          title: "Sistema Tuboplus1 Contraincendios",
          subTitle: "(PPR-CT retardante)",
          definition:
            '<p class="fs-4 light lh-sm">Tubería y accesorios que <span class="bold">garantizan seguridad</span> ante cualquier emergencia</p>',
          image: "/imagenes/inicio/inicio-slide-1.jpg",
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
  created() {
    // Condicional para mostrar contenido segun el UTM
    if (
      this.$route.query.utm_campaign != null &&
      (this.$route.query.utm_campaign == "plomero" ||
        this.$route.query.utm_campaign == "plomeria")
    ) {
      this.utmPrincipal = "residenciales";
    } else if (
      this.$route.query.utm_campaign != null &&
      (this.$route.query.utm_campaign == "empresa" ||
        this.$route.query.utm_campaign == "empresarial")
    ) {
      this.utmPrincipal = "especializadas";
    } else {
      this.utmPrincipal = "base";
    }
    console.log(this.utmPrincipal);
  },
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
#tuboplus,
#soluciones-residenciales,
#ultimas-novedades {
  padding: 3rem 0;
}

@media only screen and (max-width: 576px) {
  #inicio-header {
    padding-top: 94px;
  }
}

#soluciones-especializadas {
  padding-bottom: 3rem;
}

.carrusel-inicio-slide {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.carrusel-inicio-slide-contenido {
  position: absolute;
  width: 30%;
}

@media only screen and (max-width: 576px) {
  .carrusel-inicio-slide-contenido {
    position: relative;
    width: 100%;
  }
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
  top: 0;
  right: 0;
}
.carrusel-servicios-texto {
  padding: 1rem;
}
.carrusel-servicios-texto p {
  margin: 0;
}

.swiper-button-prev-sr,
.swiper-button-prev-se {
  left: var(--swiper-navigation-sides-offset, -30px);
}
.swiper-button-next-sr,
.swiper-button-next-se {
  right: var(--swiper-navigation-sides-offset, -30px);
}

.novedades-nodo {
  width: 330px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
}
</style>
