<template>
  <div class="container fluid mx-space">
    <div id="tuboplus" class="row align-items-center justify-content-between pb-3">
      <div class="col-6">
        <h2 class="bold blue-5">Proceso de instalación</h2>
        <p>
          Tuboplus® Hidráulico (PP-R) se une a través del proceso de
          termofusión, el cual consiste en calentar a 260 °C y unir las piezas
          para lograr la fusión del material. Este proceso permite una
          instalación segura, rápida, higiénica y práctica.
        </p>
      </div>
      <div class="col-5 align-self-center">
        <div class="video-container">
          <!-- <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=QD_dp-EbX3k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> -->
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/QD_dp-EbX3k?si=L2Uo1AR3jjyO03qW&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="row py-5">
      <div class="col-6 py-2" v-for="(paso, i) in pasos" :key="i">
        <div class="row px-5">
          <img class="col-3" :src="paso.image" alt="" />
          <h4 class="col-9 pt-2" v-html="paso.texto"></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pasos: {
        paso1: {
          image: "/imagenes/soluciones-residenciales/producto/paso01.png",
          texto:
            "<span class='bold'>1.</span> Limpia el Tubo, Conexión y Dado, con un paño sin aromatizantes, colorantes o de material sintético.",
        },
        paso2: {
          image: "/imagenes/soluciones-residenciales/producto/paso02.png",
          texto:
            "<span class='bold'>2.</span> Marca profundidad de inserción en el Tubo acorde al diámetro.",
        },
        paso3: {
          image: "/imagenes/soluciones-residenciales/producto/paso03.png",
          texto:
            "<span class='bold'>3.</span> Verifica que la temperatura del Termofusor sea adecuada (led verde) e inserta el Tubo y Conexión hasta la profundidad de inserción.",
        },
        paso4: {
          image: "/imagenes/soluciones-residenciales/producto/paso04.png",
          texto:
            "<span class='bold'>4.</span> Mantén el Tubo y la Conexión en los Dados del Termofusor el tiempo indicado para el diámetro de la tubería.",
        },
        paso5: {
          image: "/imagenes/soluciones-residenciales/producto/paso05.png",
          texto:
            "<span class='bold'>5.</span> Remueve las piezas de los dados al mismo tiempo.",
        },
        paso6: {
          image: "/imagenes/soluciones-residenciales/producto/paso06.png",
          texto:
            "<span class='bold'>6.</span> Inserta inmediatamente la tubería en la Conexión sin girarlos hasta que los labios se junten.",
        },
        paso7: {
          image: "/imagenes/soluciones-residenciales/producto/paso07.png",
          texto:
            "<span class='bold'>7.</span> Una vez que los labios se junten tienes entre 4 y 10 segundos dependiendo del diámetro para hacer ajustes. No gires durante el ajuste o la inserción.",
        },
        paso8: {
          image: "/imagenes/soluciones-residenciales/producto/paso08.png",
          texto:
            "<span class='bold'>8.</span> Alinea la tubería y mantén el tiempo de enfriamiento y soporte (una cuarta parte del tiempo de enfriamiento).",
        },
      },
    };
  },
};
</script>

<style scoped></style>
