

/**
 * We will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue';
import App from '@components';


new Vue({
	el:'#app',
	render:createEl=>createEl(App)
});