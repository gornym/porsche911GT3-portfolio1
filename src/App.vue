<template>
  <body>
    <Nav />
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Quote />
    <Section4 />
    <Footer />
  </body>
</template>

<script>
import Nav from "@/components/navComponent.vue";
import Header from "@/components/headerComponent.vue";
import Section1 from "@/components/section1Component.vue";
import Section2 from "@/components/section2Component.vue";
import Section3 from "@/components/section3Component.vue";
import Quote from "@/components/quoteComponent.vue";
import Section4 from "@/components/section4Component.vue";
import Footer from "@/components/footerComponent.vue";

export default {
  data() {
    return {};
  },
  components: {
    Nav,
    Header,
    Section1,
    Section2,
    Section3,
    Footer,
    Quote,
    Section4,
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #000000fd;
}
</style>
