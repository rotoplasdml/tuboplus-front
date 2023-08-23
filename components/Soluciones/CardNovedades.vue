<template>
  <div class="card fill" style="width: 18rem">
    <img :src="novedades.image" class="card-img-top" alt="Imagen" />
    <div class="card-body row">
      <div class="col-12">
        <p class="card-title bold blue-5">{{ novedades.title }}</p>
        <p class="card-text">{{ novedades.text }}</p>
      </div>
      <div class="card-body col-12 align-self-end">
        <NuxtLink to="" class="d-inline-block blue-2 mt-auto"
          >Continuar leyendo</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { novedades: Object },
};
</script>

<style scoped>
.fill {
  width: 100% !important;
  height: 100% !important;
}
</style>
