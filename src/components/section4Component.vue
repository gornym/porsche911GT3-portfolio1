<template>
  <section id="section4">
    <p>Gallery</p>

    <div class="gallery-box">
      <img
        v-for="(image, index) in imageUrls"
        :key="index"
        :src="image"
        alt="Porsche"
        draggable="false"
        @click="openModal(index)"
      />
    </div>

    <div v-if="modalOpen" class="modal">
      <span class="close" @click="closeModal">&times;</span>
      <div class="carousel-box">
        <Carousel
          :navigation="true"
          :pagination="true"
          :startAutoPlay="false"
          :timeout="3000"
          class="carousel"
          v-slot="{ currentSlide }"
        >
          <Slide v-for="(slide, index) in imageUrls" :key="index">
            <div v-show="currentSlide === index + 1" class="slide-info">
              <img :src="slide" alt="" />
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from "/home/pegeraw/Desktop/website-portfolio-1/src/components/Carousel.vue";
import Slide from "/home/pegeraw/Desktop/website-portfolio-1/src/components/Slide.vue";
import { ref, onMounted } from "vue";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

export default {
  components: { Carousel, Slide },

  setup() {
    const imageUrls = ref([]);
    const modalOpen = ref(false);
    const currentImageIndex = ref(0);

    onMounted(() => {
      fetchImage();
    });

    async function fetchImage() {
      try {
        const storage = getStorage();
        const imageRefs = [
          "996_1.png",
          "996_2.png",
          "996_3.jpg",
          "997_4.png",
          "997_5.png",
          "997_6.webp",
          "991_1.png",
          "991_2.png",
          "991_3.jpeg",
          "992_1.png",
          "992_2.png",
          "992_3.webp",
        ];

        for (const imageName of imageRefs) {
          const imageRef = storageRef(
            storage,
            `section4Component/${imageName}`
          );
          const url = await getDownloadURL(imageRef);
          imageUrls.value.push(url);
        }

        // console.log("Successfully fetched image URLs:", imageUrls.value);
      } catch (error) {
        // console.error("Error fetching image URLs:", error.message);
      }
    }

    function openModal(index) {
      currentImageIndex.value = index;
      modalOpen.value = true;
    }

    function closeModal() {
      modalOpen.value = false;
    }

    return {
      imageUrls,
      modalOpen,
      currentImageIndex,
      openModal,
      closeModal,
    };
  },
};
</script>

<style lang="scss">
#section4 {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#88888833, #262626);
  background-color: #727272;
  user-select: none;
  p {
    color: #e4e4e4;
    font-size: 5rem;
    margin: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
  }
  .gallery-box {
    height: 100%;
    width: 75%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 25%);
    gap: 1%;
    margin: 5rem 5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.25rem;
      box-shadow: 0px 0px 15px #00000090;
      cursor: pointer;
    }
  }
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 3rem;
      color: #e4e4e4;
      cursor: pointer;
    }
    .carousel-box {
      height: 90vh;
      width: 90vw;
      display: flex;
      align-items: center;
      justify-content: center;
      .carousel {
        position: relative;

        .slide-info {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          max-height: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            max-width: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
