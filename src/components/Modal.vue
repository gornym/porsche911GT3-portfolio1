<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="modal" v-show="isModalOpen">
    <div
      class="phone-menu-box"
      :style="{ backgroundImage: 'url(' + imgBackground + ')' }"
    >
      <span></span>
      <div class="menu-button-box">
        <a @click="scrollToSection1">All generations</a>
        <a @click="scrollToSection2">History</a>
        <a @click="scrollToSection3">Achievements</a>
        <a @click="scrollToSection4">Gallery</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

export default {
  props: {
    isModalOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    scrollToSection1() {
      document
        .getElementById("section1")
        .scrollIntoView({ behavior: "smooth" });
      this.$emit("close-modal");
    },
    scrollToSection2() {
      document
        .getElementById("section2")
        .scrollIntoView({ behavior: "smooth" });
      this.$emit("close-modal");
    },
    scrollToSection3() {
      document
        .getElementById("section3")
        .scrollIntoView({ behavior: "smooth" });
      this.$emit("close-modal");
    },
    scrollToSection4() {
      document
        .getElementById("section4")
        .scrollIntoView({ behavior: "smooth" });
      this.$emit("close-modal");
    },
  },
  setup() {
    const imgBackground = ref("");

    onMounted(() => {
      fetchImage();
    });

    async function fetchImage() {
      try {
        const storage = getStorage();
        const imageRef = storageRef(
          storage,
          "navComponent/background-menu-phone.png"
        );
        const url = await getDownloadURL(imageRef);

        imgBackground.value = url;

        console.log("Pomyślnie pobrano URL zdjęcia:", url);
      } catch (error) {
        console.error("Błąd podczas pobierania URL zdjęcia:", error.message);
      }
    }

    return {
      imgBackground,
    };
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0%;
  left: 0%;
  height: 100vh;
  width: 100%;
  background-color: #868686;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-image: fill 0 linear-gradient(#0003, #000000fd);
  .phone-menu-box {
    height: 100vh;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.523), #000000fd);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    span {
      height: 11vh;
      width: 100%;
      border-bottom: 1px solid #e4e4e4;
      box-shadow: 0px 0px 15px #1b1b1b;
    }
    .menu-button-box {
      height: 78vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5%;
      margin-bottom: 11vh;
      a {
        color: #e4e4e4;
        font-size: 1.5rem;
        font-family: "Plus Jakarta Sans", sans-serif;
        filter: drop-shadow(0px 0px 2px #e4e4e4);
      }
    }
  }
}
</style>
