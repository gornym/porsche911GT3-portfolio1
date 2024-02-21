/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import "firebase/storage";

import Nav from "@/components/navComponent.vue";
import Header from "@/components/headerComponent.vue";
import Section1 from "@/components/section1Component.vue";
import Section2 from "@/components/section2Component.vue";
import Section3 from "@/components/section3Component.vue";
import Quote from "@/components/quoteComponent.vue";
import Section4 from "@/components/section4Component.vue";
import Footer from "@/components/footerComponent.vue";

const app = createApp(App);

const firebaseConfig = {
  apiKey: "AIzaSyAKMphatJUFh8MA8iXwIJHZV2OzlDlMbKo",
  authDomain: "portfolio1-b4603.firebaseapp.com",
  projectId: "portfolio1-b4603",
  storageBucket: "portfolio1-b4603.appspot.com",
  messagingSenderId: "918195370051",
  appId: "1:918195370051:web:31d6689352282b58cebcf6",
};

initializeApp(firebaseConfig);

app.component("Nav", Nav);
app.component("Header", Header);
app.component("Section1", Section1);
app.component("Section2", Section2);
app.component("Section3", Section3);
app.component("Quote", Quote);
app.component("Section4", Section4);
app.component("Footer", Footer);

app.use(router).mount("#app");
