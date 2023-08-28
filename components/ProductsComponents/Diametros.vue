<template>
  <div class="container-fluid">
    <div class="row">
      <h2 class="bold blue-5 text-center">Diametros disponibles</h2>
    </div>
    <div class="row">
      <h5 class="blue-5 text-center">
        Tuboplus® cuenta con una amplia gama de diámetros que van desde la 1/2”
        a 4” (20 hasta los 110 mm).
      </h5>
    </div>
    <div class="row px-0 align-items-center my-5">
      <div class="col-6 px-0">
        <div class="swiper carrusel-inicio">
          <div class="swiper-wrapper">
            <div class="swiper-slide carrusel-inicio-slide">
              <img
                class="px-0 img-fluid"
                src="/imagenes/soluciones-residenciales/producto/tuboplus-galeria-productos-01.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide carrusel-inicio-slide">
              <img
                class="px-0 img-fluid"
                src="/imagenes/soluciones-residenciales/producto/tuboplus-hidraulico-ppr.jpg"
                alt=""
              />
            </div>
          </div>
        <div class="swiper-button-prev swiper-button-prev-ci"></div>
        <div class="swiper-button-next swiper-button-next-ci"></div>
        </div>
      </div>
      <div class="col-6 mx-space">
        <table class="table text-center table table-bordered border-secondary bordes">
            <thead class="bold blue-5 bordes">
               <tr class="bordes">
                    <th class="bordes" ><span class="bold blue-5">Tuboplus</span></th>
                    <th class="bold blue-5" colspan="2">Otras tuberías</th>
                </tr>
                <tr class="bordes">
                    <th class="bordes">( mm )</th>
                    <th class="bordes">Correspondencia en pulgadas (")</th>
                    <th>Correspondencia en milimetros (mm)</th>
                </tr>
            </thead>
            <tbody class="bordes blue-5">
                <tr>
                    <td class="bordes">20</td>
                    <td class="bordes">1/2</td>
                    <td class="bordes">13</td>
                </tr>
                <tr>
                    <td class="bordes">25</td>
                    <td class="bordes">3/4</td>
                    <td class="bordes">19</td>
                </tr>
                <tr>
                    <td class="bordes">32</td>
                    <td class="bordes">1</td>
                    <td class="bordes">25</td>
                </tr>
                <tr>
                    <td class="bordes">40</td>
                    <td class="bordes">1 1/4</td>
                    <td class="bordes">32</td>
                </tr>
                <tr>
                    <td class="bordes">50</td>
                    <td class="bordes">1 1/2</td>
                    <td class="bordes">38</td>
                </tr>
                <tr>
                    <td class="bordes">63</td>
                    <td class="bordes">2</td>
                    <td class="bordes">51</td>
                </tr>
                <tr>
                    <td class="bordes">75</td>
                    <td class="bordes">2 1/2</td>
                    <td class="bordes">13</td>
                </tr>
                <tr>
                    <td class="bordes">90</td>
                    <td class="bordes">3</td>
                    <td class="bordes">75</td>
                </tr>
                <tr>
                    <td class="bordes">110</td>
                    <td class="bordes">4</td>
                    <td class="bordes">100</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.bordes {
    border: 2px solid #00AFD7 !important;
}


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
