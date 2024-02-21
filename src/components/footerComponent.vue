<template>
  <footer>
    <div class="left">
      <p>&copy; 2024 Maciej Górny | Wszelkie prawa zastrzeżone</p>
      <p class="p-phone">
        &copy; 2024 Maciej Górny |<br />
        Wszelkie prawa zastrzeżone
      </p>
    </div>
    <div class="middle">
      <img alt="logo" :src="logo1" draggable="false" />
      <img alt="logo" :src="logo2" draggable="false" />
    </div>
    <div class="right">
      <a href="https://www.linkedin.com/in/maciej-g%C3%B3rny-5b7129252/">
        <img alt="linkedin" :src="linkedin" draggable="false"
      /></a>
      <a href="https://github.com/gornym/porsche911GT3-portfolio1">
        <img alt="github" :src="github" draggable="false"
      /></a>
    </div>
  </footer>
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

export default {
  setup() {
    const logo1 = ref("");
    const logo2 = ref("");
    const linkedin = ref("");
    const github = ref("");

    let handleScroll;

    onMounted(() => {
      fetchImage();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    async function fetchImage() {
      try {
        const storage = getStorage();
        const imageRef1 = storageRef(storage, "footerComponent/1.png");
        const imageRef2 = storageRef(storage, "footerComponent/2.png");
        const imageRef3 = storageRef(storage, "footerComponent/3.png");
        const imageRef4 = storageRef(storage, "footerComponent/4.png");

        const url1 = await getDownloadURL(imageRef1);
        const url2 = await getDownloadURL(imageRef2);
        const url3 = await getDownloadURL(imageRef3);
        const url4 = await getDownloadURL(imageRef4);

        logo1.value = url1;
        logo2.value = url2;
        linkedin.value = url3;
        github.value = url4;

        // console.log("Pomyślnie pobrano URL zdjęcia:", url1);
      } catch (error) {
        // console.error("Błąd podczas pobierania URL zdjęcia:", error.message);
      }
    }

    return {
      logo1,
      logo2,
      linkedin,
      github,
    };
  },
};
</script>

<style lang="scss">
footer {
  height: 10vh;
  width: 100%;
  background-color: #111111dc;
  outline: 1px solid #e4e4e4;
  box-shadow: 0px 0px 15px #282828;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .left {
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2rem;
    p {
      font-family: "Plus Jakarta Sans", sans-serif;
      user-select: none;
      color: #e4e4e4;
    }
    .p-phone {
      display: none;
      font-family: "Plus Jakarta Sans", sans-serif;
      user-select: none;
      color: #e4e4e4;
      font-size: 0.6rem;
    }
  }
  .middle {
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      height: 20%;
      filter: drop-shadow(0px 0px 5px white);
    }
  }
  .right {
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 2rem;
    a {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      transition: 0.5s all;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 70%;
      }
    }
    a:hover {
      background-color: #aeaeae32;
    }
  }
}
@media only screen and (max-width: 431px) {
  footer {
    .left {
      padding-left: 1rem !important;
      p {
        display: none;
      }
      .p-phone {
        display: flex;
      }
    }

    .right {
      padding-right: 1rem !important;
      a {
        height: 2rem;
        width: 2rem;
      }
    }
  }
}
</style>
