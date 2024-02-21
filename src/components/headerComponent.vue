<template>
  <header
    class="header-box"
    @animationend="headerAnimationEnd"
    :style="{ backgroundImage: `url('${imageUrl}')` }"
    :class="{ 'menu-open': isMenuOpen }"
  >
    <div class="header-heading animate-color" :class="{ hovered: isHovered }">
      porsche 911 gt3 evolution history
    </div>
    <div class="header-more">
      <a :class="{ hovered: isHovered }" @click="scrollToSection1">
        Find out more
        <span class="material-symbols-outlined"> expand_more </span>
      </a>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    headerAnimationEnd() {
      this.isHovered = true;
    },
    scrollToSection1() {
      document
        .getElementById("section1")
        .scrollIntoView({ behavior: "smooth" });
    },
  },
  setup() {
    const imageUrl = ref("");

    onMounted(() => {
      fetchImage();
    });

    async function fetchImage() {
      try {
        const storage = getStorage();
        const imageRef = storageRef(storage, "headerComponent/background.jpg");
        const url = await getDownloadURL(imageRef);

        imageUrl.value = url;

        console.log("Pomyślnie pobrano URL zdjęcia:", url);
      } catch (error) {
        console.error("Błąd podczas pobierania URL zdjęcia:", error.message);
      }
    }

    return {
      imageUrl,
    };
  },
};
</script>

<style lang="scss">
.header-box {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-image: fill 0 linear-gradient(#0003, #000000fd);
  filter: blur(10px);
  animation: fadeIn 2s ease-out forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  .header-heading {
    height: 95vh;
    width: 100%;
    text-align: center;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 3rem;
    text-transform: uppercase;
    color: transparent;
    transition: color 1.5s ease 0s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-heading.hovered {
    color: #e4e4e4;
  }
  .header-more {
    height: 5vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: transparent;
      font-family: "Plus Jakarta Sans", sans-serif;
      position: relative;
      animation: bounceUpDown 1.5s infinite;
      transition: color 1.5s ease 0s;
      cursor: pointer;
    }
    a.hovered {
      color: #e4e4e4;
    }
  }
}
@keyframes fadeIn {
  from {
    filter: blur(10px);
  }
  to {
    filter: blur(0px);
  }
}
@keyframes bounceUpDown {
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
}
@media only screen and (max-width: 431px) {
  .header-more {
    margin-bottom: 5rem;
  }
}
</style>
