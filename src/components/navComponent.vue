<template>
  <nav>
    <div class="logo-box">
      <img :src="imageUrl" alt="logo" draggable="false" @click="scrollToTop" />
    </div>
    <div class="menu-box">
      <a @click="scrollToSection1">All generations</a>
      <a @click="scrollToSection2">History</a>
      <a @click="scrollToSection3">Achievements</a>
      <a @click="scrollToSection4">Gallery</a>
    </div>
    <div class="menu-box-phone">
      <button
        id="open-menu"
        @click="toggleMenu"
        class="hamburger hamburger--collapse"
        :class="{ 'is-active': isModalOpen }"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <Modal :isModalOpen="isModalOpen" @close-modal="closeModal" />
  </nav>
</template>

<script>
import { ref, onMounted } from "vue";
import Modal from "@/components/Modal.vue";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

export default {
  components: {
    Modal,
  },
  setup() {
    const imageUrl = ref("");
    const isModalOpen = ref(false);

    onMounted(() => {
      fetchImage();
      toggleHamburgerAnimation();
    });

    const toggleMenu = () => {
      isModalOpen.value = !isModalOpen.value;
      toggleHamburgerAnimation();
    };

    const closeModal = () => {
      isModalOpen.value = false;
      toggleHamburgerAnimation();
    };

    const toggleHamburgerAnimation = () => {
      // Look for .hamburger
      var hamburger = document.querySelector(".hamburger");
      // Toggle class "is-active"
      if (hamburger) {
        hamburger.classList.toggle("is-active", isModalOpen.value);
        // Do something else, like open/close menu
      }
    };

    async function fetchImage() {
      try {
        const storage = getStorage();
        const imageRef = storageRef(storage, "navComponent/logo.png");
        const url = await getDownloadURL(imageRef);

        imageUrl.value = url;

        // console.log("Pomyślnie pobrano URL zdjęcia:", url);
      } catch (error) {
        // console.error("Błąd podczas pobierania URL zdjęcia:", error.message);
      }
    }

    return {
      imageUrl,
      isModalOpen,
      toggleMenu,
      closeModal,
    };
  },
  methods: {
    scrollToSection1() {
      document
        .getElementById("section1")
        .scrollIntoView({ behavior: "smooth" });
    },
    scrollToSection2() {
      document
        .getElementById("section2")
        .scrollIntoView({ behavior: "smooth" });
    },
    scrollToSection3() {
      document
        .getElementById("section3")
        .scrollIntoView({ behavior: "smooth" });
    },
    scrollToSection4() {
      document
        .getElementById("section4")
        .scrollIntoView({ behavior: "smooth" });
    },
    scrollToTop() {
      document
        .querySelector(".header-box")
        .scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss">
@import "@/style/hamburgers.css";

nav {
  height: 11vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #111111dc;
  border-bottom: 1px solid #e4e4e4;
  box-shadow: 0px 0px 15px #282828;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;
  .logo-box {
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      height: 90%;
      cursor: pointer;
      padding-left: 2rem;
    }
  }
  .menu-box {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    padding-right: 2rem;
    a {
      position: relative;
      text-decoration: none;
      color: #e4e4e4;
      cursor: pointer;
      font-family: "Plus Jakarta Sans", sans-serif;
      font-size: 1.3rem;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #e4e4e4;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.4s ease;
      }
      &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }
  .menu-box-phone {
    display: none;
  }
}
@media only screen and (max-width: 900px) {
  nav {
    .logo-box {
      width: 50%;
      position: relative;
      z-index: 15;
    }
    .menu-box {
      display: none;
    }
    .menu-box-phone {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      #open-menu {
        margin-right: 2rem;
        background-color: transparent;
        border: none;
        position: relative;
        z-index: 15;
        span {
          color: #e4e4e4;
          font-size: 2.5rem;
          font-weight: 100;
        }
      }
      a {
        display: block;
      }
    }
  }
}
</style>
