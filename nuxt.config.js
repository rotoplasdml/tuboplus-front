export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Tuboplus',
		htmlAttrs: {
			lang: 'es-MX'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ 
				rel: 'icon', 
				type: 'image/x-icon', 
				href: '/favicon.ico' 
			},
			{ 
				rel: 'stylesheet', 
				href: '/css/bootstrap.min.css',
			},
			{ 
				rel: 'stylesheet', 
				href: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css',
			},
			{ 
				rel: 'stylesheet', 
				href: '/css/estilos.css',
			}
		],
		script: [
			{ 
				src: '/js/bootstrap.bundle.min.js',
				body: true 
			},
			{ 
				src: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
