<template>
  <div class="container-fluid bg-grey-1 py-4">
    <div class="d-flex justify-content-center">
      <h2 class="bold blue-5">Apto para uso en:</h2>
    </div>
    <div class="d-flex justify-content-evenly mt-5 blue-5" >
        <div class="" v-for="(uso, i) in usos" :key="i">
            <p>{{uso.name}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            usos: {
                uso1: {
                    image: "",
                    name:"Viviendas",
                },
                uso2: {
                    image: "",
                    name:"Comercial",
                },
                uso3: {
                    image: "",
                    name:"Hospitales",
                },
                uso4: {
                    image: "",
                    name:"Industria",
                },
                uso5: {
                    image: "",
                    name:"Oficinas",
                },
                uso6: {
                    image: "",
                    name:"Estadios",
                },
            }
        }
    }
};
</script>

<style scoped></style>
