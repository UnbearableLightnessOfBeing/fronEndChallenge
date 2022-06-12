import { createApp } from 'vue'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faXmark);
library.add(faBars);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


createApp(App).
component("font-awesome-icon", FontAwesomeIcon).
use(store).
use(router).
mount('#app')
