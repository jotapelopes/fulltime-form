import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'primevue/resources/themes/aura-light-green/theme.css';
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'


const app = createApp(App);
app.use(PrimeVue);

app.use(router)

app.component('Stepper', Stepper)
app.component('StepperPanel', StepperPanel)

app.mount('#app')
