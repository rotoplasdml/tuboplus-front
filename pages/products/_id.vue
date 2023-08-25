<template>
  <div class="container-fluid">
    <div id="" class="row">
      <div class="col-12 p-0 m-0">
        <ProductBanner />
      </div>
    </div>
    <div class="row">
      <AptoParaUso />
    </div>
    <div class="row fondo">
      <div class="col-12 px-0">
        <CodigoEscaneable />
      </div>
    </div>
    <div class="row">
      <Descargables />
    </div>
    <div class="row mb-4">
      <TheBim />
    </div>
    <div class="row mb-4">
      <ProcesoInstalacion />
    </div>
  </div>
  
</template>

<script>
import ProductBanner from "../../components/ProductsComponents/ProductBanner.vue";
import AptoParaUso from "../../components/ProductsComponents/AptoParaUso.vue";
import CodigoEscaneable from "../../components/ProductsComponents/CodigoEscaneable.vue";
import Descargables from "../../components/ProductsComponents/Descargables.vue";
import ProcesoInstalacion from "../../components/ProductsComponents/ProcesoInstalacion.vue";
import TheBim from "../../components/Soluciones/TheBim.vue";
export default {
  name: "ProductPage",
  components: { ProductBanner, AptoParaUso, CodigoEscaneable, Descargables, TheBim, ProcesoInstalacion },
  data() {
    return {
      id: this.$route.params.id,
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
    };
  },
  created() {
    let productId = this.$route.params.id;
    console.log(this.id);
    if (this.id == 1) {
      console.log("hola friemd");
    }
  },
};
</script>

<style scoped>

</style>
