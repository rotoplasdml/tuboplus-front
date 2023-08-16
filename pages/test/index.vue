<template>
    <div class="p-3 space" >
    <div class="container-fluid my-3">
        <div class="row justify-content-center gx-5">
            <Product class="col-3" />
            <Product class="col-3" />
            <Product class="col-3" />
            <Product class="col-3" />
        </div>
    </div>
    </div>
</template>

<script>
import Product from '@/components/Product.vue'
	export default {}
</script>

<style>
.caja {
    border: solid orange 3px;
    background-color: aqua;
}

.space {
    margin-top: 300px;
}

</style>
