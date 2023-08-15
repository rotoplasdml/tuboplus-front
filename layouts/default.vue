<template>
	<div>
		<TheMenu />
		<Nuxt />
		<TheFooter />
	</div>
</template>


<script>
	import TheMenu from '~/components/TheMenu.vue'
	import TheFooter from '~/components/TheFooter.vue'
	export default {
		name: 'default',
		components: {
			TheMenu,
			TheFooter,
		},
		mounted: function () {
			console.log('menu:mounted')
		}
	}
</script>


<style></style>