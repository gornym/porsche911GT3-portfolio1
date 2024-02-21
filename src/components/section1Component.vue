<template>
  <section id="section1">
    <div class="main-box1" style="align-items: flex-end">
      <div class="content1">
        <div class="img-headline">
          <a> Porsche 911 gt3 996</a>
        </div>
        <div class="img">
          <img
            :src="imageUrl1"
            alt="logo"
            draggable="false"
            @click="scrollToTop"
          />
        </div>
      </div>
      <div class="content2">
        <div class="img-headline">
          <a>Porsche 911 gt3 997</a>
        </div>

        <div class="img">
          <img
            :src="imageUrl2"
            alt="logo"
            draggable="false"
            @click="scrollToTop"
            style="height: 80%"
          />
        </div>
      </div>
    </div>
    <div class="main-box2">
      <div class="content3">
        <div class="img-headline">
          <a>porsche 911 gt3 991</a>
        </div>

        <div class="img">
          <img
            :src="imageUrl3"
            alt="logo"
            draggable="false"
            @click="scrollToTop"
          />
        </div>
      </div>
      <div class="content4">
        <div class="img-headline">
          <a>porsche 911 gt3 992</a>
        </div>

        <div class="img">
          <img
            :src="imageUrl4"
            alt="logo"
            draggable="false"
            @click="scrollToTop"
          />
        </div>
      </div>
    </div>
  </section>
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
    const imageUrl1 = ref("");
    const imageUrl2 = ref("");
    const imageUrl3 = ref("");
    const imageUrl4 = ref("");

    const calculateLowerEdgeHeight1 = () => {
      const boxes = document.querySelectorAll(".content1");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "opacity 0.3s ease";
          box.style.opacity = "1";
        } else {
          box.style.transition = "opacity 0.3s ease";
          box.style.opacity = "0";
        }
      });
    };
    const calculateLowerEdgeHeight2 = () => {
      const boxes = document.querySelectorAll(".content2");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "opacity 0.3s ease";
          box.style.opacity = "1";
        } else {
          box.style.transition = "opacity 0.3s ease";
          box.style.opacity = "0";
        }
      });
    };
    const calculateLowerEdgeHeight3 = () => {
      const boxes = document.querySelectorAll(".content3");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "opacity 0.3s ease";
          box.style.opacity = "1";
        } else {
          box.style.transition = "opacity 0.3s ease";
          box.style.opacity = "0";
        }
      });
    };
    const calculateLowerEdgeHeight4 = () => {
      const boxes = document.querySelectorAll(".content4");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "opacity 0.3s ease";
          box.style.opacity = "1";
        } else {
          box.style.transition = "opacity 0.3s ease";
          box.style.opacity = "0";
        }
      });
    };

    onMounted(() => {
      fetchImage();
      window.addEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
      calculateLowerEdgeHeight1();
      calculateLowerEdgeHeight2();
      calculateLowerEdgeHeight3();
      calculateLowerEdgeHeight4();
    };

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    async function fetchImage() {
      try {
        const storage = getStorage();
        const imageRef1 = storageRef(
          storage,
          "section1Component/996_GT3_1.png"
        );
        const imageRef2 = storageRef(storage, "section1Component/997_GT3.png");
        const imageRef3 = storageRef(storage, "section1Component/998_GT3.png");
        const imageRef4 = storageRef(storage, "section1Component/999_GT3.png");

        const url1 = await getDownloadURL(imageRef1);
        const url2 = await getDownloadURL(imageRef2);
        const url3 = await getDownloadURL(imageRef3);
        const url4 = await getDownloadURL(imageRef4);

        imageUrl1.value = url1;
        imageUrl2.value = url2;
        imageUrl3.value = url3;
        imageUrl4.value = url4;

        // console.log("Pomyślnie pobrano URL zdjęcia:", url1);
      } catch (error) {
        // console.error("Błąd podczas pobierania URL zdjęcia:", error.message);
      }
    }

    return {
      imageUrl1,
      imageUrl2,
      imageUrl3,
      imageUrl4,
    };
  },
};
</script>
<style lang="scss">
#section1 {
  height: 100vh;
  width: 100%;
  background-color: #000000fd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;

  .main-box1,
  .main-box2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5%;
    height: 50%;
    width: 100%;

    .content1,
    .content2,
    .content3,
    .content4 {
      height: 70%;
      width: 30%;
      background-color: #f9ffff3b;
      border-radius: 0.25rem;
      border: 1px solid #a9a9a939;
      box-shadow: 0px 0px 20px #a9a9a999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: height 0.5s;
      transition: width 0.5s;
      .img-headline {
        height: 30%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          font-size: 1.7rem;
          color: #e4e4e4;
          font-family: "Plus Jakarta Sans", sans-serif;
          text-transform: uppercase;
          text-align: center;
        }
      }
      .img {
        height: 70%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: drop-shadow(0px 0px 15px black);
        img {
          height: 100%;
        }
      }
    }
    .content1:hover,
    .content2:hover,
    .content3:hover,
    .content4:hover {
      height: 71%;
      width: 31%;
    }
  }
}
@media only screen and (max-width: 900px) {
  .main-box1,
  .main-box2 {
    display: flex;
    flex-direction: column !important;
    align-items: center !important;
    .content1,
    .content2,
    .content3,
    .content4 {
      width: 80% !important;
      height: 45% !important;
      .img {
        height: 70%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: drop-shadow(0px 0px 15px black);
        img {
          height: 90% !important;
        }
      }
    }
  }
}
</style>
