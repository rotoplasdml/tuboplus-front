<template>
  <div class="swiper-slide carrusel-inicio-slide">
    <div class="carrusel-inicio-slide-contenido blue-5 p-3 offset-1">
      <h2 class="bold">
        <span class="blue-2 ">{{ infoBanner.tag }}</span
        ><br />
        <span class="fs40 bold">{{ infoBanner.title }}</span
        ><br />
        <span class="light">{{ infoBanner.subTitle }}</span>
      </h2>
      <p v-html="infoBanner.definition" class="fs-4 light lh-sm mt-5"></p>
      <!-- <a class="rtp-btn hvr-forward" href="">Ver más <img src="" alt="" /></a> -->
    </div>
    <img class="d-none d-sm-block w-100" :src="infoBanner.image" alt="Slide 1" />
  </div>
</template>

<script>
export default {
  props: {
    infoBanner: Object,
    infoBanner2: Object,
    infoBanner3: Object,
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