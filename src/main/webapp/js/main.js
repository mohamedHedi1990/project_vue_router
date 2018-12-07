import App from '../app-vue/app.vue'
import Vue from 'vue'
import router from './router'
console.log("main.js");
new Vue({
		el: '#project',	
		router,	
		render: h => h(App)
		
	});
