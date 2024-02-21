<template>
  <section id="section2">
    <p>History</p>
    <div class="box-history2" style="margin-top: 12vh">
      <div class="history">
        <h1>Porsche 911 GT3 (996)</h1>
        <a
          >Introduced in 1999, the Porsche 911 GT3 (996) was Porsche's response
          to the growing interest in high-performance sports cars. It featured a
          3.6-liter engine producing 360 horsepower. Equipped with a 6-speed
          manual transmission, it emphasized the car's sporty character.
          Innovative aerodynamic solutions improved stability at high speeds.</a
        >
      </div>
      <div class="photo">
        <img
          alt="porsche 996"
          :src="porsche996"
          draggable="false"
          style="height: 80%"
        />
      </div>
    </div>
    <div class="box-history1">
      <div class="photo">
        <img
          alt="porsche 997"
          :src="porsche997"
          draggable="false"
          style="height: 70%"
        />
      </div>
      <div class="history">
        <h1>Porsche 911 GT3 (997)</h1>
        <a
          >In 2006, Porsche unveiled the 911 GT3 (997). It featured a new
          3.6-liter engine producing 415 horsepower. A new all-wheel-drive
          system was introduced, enhancing performance and handling. The use of
          lightweight materials reduced the vehicle's weight, contributing to
          improved overall performance.</a
        >
      </div>
    </div>
    <div class="box-history1-phone">
      <div class="history">
        <h1>Porsche 911 GT3 (997)</h1>
        <a
          >In 2006, Porsche unveiled the 911 GT3 (997). It featured a new
          3.6-liter engine producing 415 horsepower. A new all-wheel-drive
          system was introduced, enhancing performance and handling. The use of
          lightweight materials reduced the vehicle's weight, contributing to
          improved overall performance.</a
        >
      </div>
      <div class="photo">
        <img
          alt="porsche 997"
          :src="porsche997"
          draggable="false"
          style="height: 70%"
        />
      </div>
    </div>
    <div class="box-history2">
      <div class="history">
        <h1>Porsche 911 GT3 (991)</h1>
        <a
          >2013 saw the introduction of the Porsche 911 GT3 (991). It featured a
          3.8-liter engine generating 475 horsepower. The PDK gearbox became
          available as an option, providing faster and smoother gear shifts. The
          introduction of rear-wheel steering further enhanced maneuverability,
          especially in corners.</a
        >
      </div>
      <div class="photo">
        <img
          alt="porsche 991"
          :src="porsche991"
          draggable="false"
          style="height: 80%"
        />
      </div>
    </div>
    <div class="box-history1">
      <div class="photo">
        <img
          alt="porsche 992"
          :src="porsche992"
          draggable="false"
          style="height: 100%"
        />
      </div>
      <div class="history">
        <h1>Porsche 911 GT3 (992)</h1>
        <a
          >In 2022, the Porsche 911 GT3 (992) debuted as the latest incarnation
          of this iconic line. Powered by a 4.0-liter engine producing 502
          horsepower, this model featured an advanced aerodynamic system and an
          improved suspension system, making it even more refined and precise on
          the track. The incorporation of hybrid technology marked a step
          towards sustainable performance.</a
        >
      </div>
    </div>
    <div class="box-history1-phone">
      <div class="history">
        <h1>Porsche 911 GT3 (992)</h1>
        <a
          >In 2022, the Porsche 911 GT3 (992) debuted as the latest incarnation
          of this iconic line. Powered by a 4.0-liter engine producing 502
          horsepower, this model featured an advanced aerodynamic system and an
          improved suspension system, making it even more refined and precise on
          the track. The incorporation of hybrid technology marked a step
          towards sustainable performance.</a
        >
      </div>
      <div class="photo">
        <img
          alt="porsche 992"
          :src="porsche992"
          draggable="false"
          style="height: 100%"
        />
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
    const porsche996 = ref("");
    const porsche997 = ref("");
    const porsche991 = ref("");
    const porsche992 = ref("");

    const calculateLowerEdgeHeight1 = () => {
      const boxes = document.querySelectorAll(".box-history1-phone");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight * 1.25) {
          box.style.transition = "left 0.3s ease";
          box.style.left = "0%";
        } else {
          box.style.transition = "left 0.3s ease";
          box.style.left = "-100%";
        }
      });
    };
    const calculateLowerEdgeHeight2 = () => {
      const boxes = document.querySelectorAll(".box-history2");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight * 1.25) {
          box.style.transition = "right 0.3s ease";
          box.style.right = "0%";
        } else {
          box.style.transition = "right 0.3s ease";
          box.style.right = "-100%";
        }
      });
    };
    const calculateLowerEdgeHeight3 = () => {
      const boxes = document.querySelectorAll(".box-history1");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight * 1.25) {
          box.style.transition = "left 0.3s ease";
          box.style.left = "0%";
        } else {
          box.style.transition = "left 0.3s ease";
          box.style.left = "-100%";
        }
      });
    };

    onMounted(() => {
      fetchImage();
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
      calculateLowerEdgeHeight1();
      calculateLowerEdgeHeight2();
      calculateLowerEdgeHeight3();
    };

    async function fetchImage() {
      try {
        const storage = getStorage();
        const imageRef1 = storageRef(storage, "section2Component/996.png");
        const imageRef2 = storageRef(storage, "section2Component/997.png");
        const imageRef3 = storageRef(storage, "section2Component/991.png");
        const imageRef4 = storageRef(storage, "section2Component/992.png");

        const url1 = await getDownloadURL(imageRef1);
        const url2 = await getDownloadURL(imageRef2);
        const url3 = await getDownloadURL(imageRef3);
        const url4 = await getDownloadURL(imageRef4);

        porsche996.value = url1;
        porsche997.value = url2;
        porsche991.value = url3;
        porsche992.value = url4;

        console.log("Pomyślnie pobrano URL zdjęcia:", url1);
      } catch (error) {
        console.error("Błąd podczas pobierania URL zdjęcia:", error.message);
      }
    }

    return {
      porsche996,
      porsche997,
      porsche991,
      porsche992,
    };
  },
};
</script>

<style lang="scss">
#section2 {
  height: 100%;
  width: 100%;
  background: linear-gradient(#000000fd, #1b1b1b33);
  background-color: #727272;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  p {
    color: #e4e4e4;
    font-size: 5rem;
    margin: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
    padding-top: 10rem;
  }
  .box-history1-phone {
    display: none;
  }
  .box-history1,
  .box-history2 {
    height: 20rem;
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    .history {
      height: 100%;
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        text-transform: uppercase;
        color: #e4e4e4;
        font-size: 2rem;
        padding: 10px 20px;
        font-family: "Plus Jakarta Sans", sans-serif;
      }
      a {
        color: #e4e4e4;
        font-family: "Plus Jakarta Sans", sans-serif;
        padding: 10px 60px;
        text-align: justify;
      }
    }
    .photo {
      height: 100%;
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0px 0px 15px black);
    }
  }
}

@media only screen and (max-width: 900px) {
  .box-history1 {
    display: none !important;
  }
  .box-history1-phone,
  .box-history2 {
    height: 40rem !important;
    width: 90% !important;
    flex-direction: column !important;
    display: flex !important;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    .history {
      height: 50% !important;
      width: 100% !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        text-transform: uppercase;
        color: #e4e4e4;
        font-size: 2rem;
        padding: 10px 20px;
        font-family: "Plus Jakarta Sans", sans-serif;
        text-align: center;
      }
      a {
        color: #e4e4e4;
        font-family: "Plus Jakarta Sans", sans-serif;
        padding: 10px 60px;
        text-align: justify;
      }
    }
    .photo {
      padding-top: 5%;
      height: 50% !important;
      width: 100% !important;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0px 0px 15px black);
      img {
        height: 50% !important;
      }
    }
  }
}
</style>
