import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import jsPDF from 'jspdf'
import './assets/css/tailwind.css'


/*import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'*/

createApp(App).use(router,jsPDF).mount('#root')
    
   