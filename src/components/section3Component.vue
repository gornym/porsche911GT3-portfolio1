<template>
  <section id="section3">
    <p>Achievements</p>
    <div class="achievements-box1">
      <div class="achievement1">
        <div class="content">
          <h1>Lap record</h1>
          <a>
            The Porsche 911 GT3 (996) set a lap record at the Nürburgring
            Nordschleife in 2001, completing the circuit in an impressive time
            of 7 minutes and 56 seconds.
          </a>
        </div>
        <div class="img">
          <img alt="track1" :src="track1" draggable="false" />
        </div>
      </div>
      <div class="achievement2">
        <div class="img" style="width: 50%">
          <img
            alt="team1"
            :src="team1"
            draggable="false"
            style="width: 80%; height: auto"
          />
        </div>
        <div class="content" style="width: 50%">
          <h1>GT Championship Victories</h1>
          <a style="padding: 20px 20px">
            The Porsche 911 GT3 (997) achieved multiple victories in various GT
            Championship series worldwide, clinching championship titles in
            2007, 2009, and 2011.
          </a>
        </div>
      </div>
    </div>
    <div class="achievements-box2">
      <div class="achievement3">
        <div class="content" style="width: 50%">
          <h1>Pikes Peak International Hill Climb Victory</h1>
          <a style="padding: 20px 20px">
            In 2019, the Porsche 911 GT3 (991) impressed the world, claiming the
            first position in its class at the iconic Pikes Peak International
            Hill Climb.
          </a>
        </div>
        <div class="img" style="width: 50%">
          <img
            alt="track2"
            :src="track2"
            draggable="false"
            style="width: 80%; height: auto"
          />
        </div>
      </div>
      <div class="achievement4">
        <div class="img" style="width: 50%">
          <img alt="track3" :src="track3" draggable="false" />
        </div>
        <div class="content">
          <h1>Monza Track Speed Record</h1>
          <a style="padding: 20px 20px">
            The Porsche 911 GT3 (996) set a speed record at the Monza circuit in
            2000, reaching an impressive 307 km/h on the main straight.
          </a>
        </div>
      </div>
    </div>
    <div class="achievements-box-phone">
      <div class="achievement1-phone">
        <div class="content-phone">
          <h1>Lap record</h1>
          <a>
            The Porsche 911 GT3 (996) set a lap record at the Nürburgring
            Nordschleife in 2001, completing the circuit in an impressive time
            of 7 minutes and 56 seconds.
          </a>
        </div>
        <div class="img-phone">
          <img alt="track1" :src="track1" draggable="false" />
        </div>
      </div>
      <div class="achievement2-phone">
        <div class="img-phone">
          <img
            alt="team1"
            :src="team1"
            draggable="false"
            style="width: 80%; height: auto"
          />
        </div>
        <div class="content-phone">
          <h1>GT Championship Victories</h1>
          <a style="padding: 20px 20px">
            The Porsche 911 GT3 (997) achieved multiple victories in various GT
            Championship series worldwide, clinching championship titles in
            2007, 2009, and 2011.
          </a>
        </div>
      </div>
      <div class="achievement3-phone">
        <div class="content-phone">
          <h1>Pikes Peak International Hill Climb Victory</h1>
          <a style="padding: 20px 10px">
            In 2019, the Porsche 911 GT3 (991) impressed the world, claiming the
            first position in its class at the iconic Pikes Peak International
            Hill Climb.
          </a>
        </div>
        <div class="img-phone">
          <img
            alt="track2"
            :src="track2"
            draggable="false"
            style="width: 80%; height: auto"
          />
        </div>
      </div>
      <div class="achievement4-phone">
        <div class="img-phone">
          <img alt="track3" :src="track3" draggable="false" />
        </div>
        <div class="content-phone">
          <h1>Monza Track Speed Record</h1>
          <a style="padding: 10px 10px">
            The Porsche 911 GT3 (996) set a speed record at the Monza circuit in
            2000, reaching an impressive 307 km/h on the main straight.
          </a>
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
    const track1 = ref("");
    const team1 = ref("");
    const track2 = ref("");
    const track3 = ref("");

    const calculateLowerEdgeHeight1 = () => {
      const boxes = document.querySelectorAll(".achievement1");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(0px)";
        } else {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(10px)";
        }
      });
    };
    const calculateLowerEdgeHeight2 = () => {
      const boxes = document.querySelectorAll(".achievement2");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(0px)";
        } else {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(10px)";
        }
      });
    };
    const calculateLowerEdgeHeight3 = () => {
      const boxes = document.querySelectorAll(".achievement3");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(0px)";
        } else {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(10px)";
        }
      });
    };
    const calculateLowerEdgeHeight4 = () => {
      const boxes = document.querySelectorAll(".achievement4");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(0px)";
        } else {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(10px)";
        }
      });
    };
    const calculateLowerEdgeHeight5 = () => {
      const boxes = document.querySelectorAll(".achievement1-phone");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(0px)";
        } else {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(10px)";
        }
      });
    };
    const calculateLowerEdgeHeight6 = () => {
      const boxes = document.querySelectorAll(".achievement2-phone");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(0px)";
        } else {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(10px)";
        }
      });
    };
    const calculateLowerEdgeHeight7 = () => {
      const boxes = document.querySelectorAll(".achievement3-phone");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(0px)";
        } else {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(10px)";
        }
      });
    };
    const calculateLowerEdgeHeight8 = () => {
      const boxes = document.querySelectorAll(".achievement4-phone");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const lowerEdgeHeight = rect.bottom;

        if (lowerEdgeHeight <= window.innerHeight) {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(0px)";
        } else {
          box.style.transition = "filter 0.5s ease";
          box.style.filter = "blur(10px)";
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
      calculateLowerEdgeHeight5();
      calculateLowerEdgeHeight6();
      calculateLowerEdgeHeight7();
      calculateLowerEdgeHeight8();
    };

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    async function fetchImage() {
      try {
        const storage = getStorage();
        const imageRef1 = storageRef(storage, "section3Component/1.png");
        const imageRef2 = storageRef(storage, "section3Component/2.png");
        const imageRef3 = storageRef(storage, "section3Component/3.png");
        const imageRef4 = storageRef(storage, "section3Component/4.png");

        const url1 = await getDownloadURL(imageRef1);
        const url2 = await getDownloadURL(imageRef2);
        const url3 = await getDownloadURL(imageRef3);
        const url4 = await getDownloadURL(imageRef4);

        track1.value = url1;
        team1.value = url2;
        track2.value = url3;
        track3.value = url4;

        // console.log("Pomyślnie pobrano URL zdjęcia:", url1);
      } catch (error) {
        // console.error("Błąd podczas pobierania URL zdjęcia:", error.message);
      }
    }

    return {
      track1,
      team1,
      track2,
      track3,
    };
  },
};
</script>

<style lang="scss">
#section3 {
  height: auto;
  width: 100%;
  background: linear-gradient(#1b1b1b33, #dfdfdffd);
  background-color: #727272;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  gap: 5rem;
  p {
    color: #e4e4e4;
    font-size: 5rem;
    margin: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
    padding-top: 15rem;
  }
  .achievements-box1,
  .achievements-box2 {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    .achievement1,
    .achievement2,
    .achievement4,
    .achievement3 {
      height: 100%;
      width: 35%;
      background-color: rgba(255, 255, 255, 0.248);
      border-radius: 0.25rem;
      border: 1px solid rgba(255, 255, 255, 0.182);
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.56);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .content {
        height: auto;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        h1 {
          font-size: 1.7rem;
          color: #232323;
          font-family: "Plus Jakarta Sans", sans-serif;
          padding: 10px 40px;
          text-align: center;
        }
        a {
          font-size: 1.2rem;
          font-family: "Plus Jakarta Sans", sans-serif;
          color: #232323;
          text-align: justify;
          padding: 20px 40px;
        }
      }
      .img {
        height: 100%;
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: drop-shadow(0px 0px 5px black);
        img {
          width: 70%;
          padding: 30px 30px;
          border-radius: 0.25rem;
        }
      }
    }
  }
  .achievements-box-phone {
    display: none;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    .achievement1-phone,
    .achievement2-phone,
    .achievement3-phone,
    .achievement4-phone {
      height: 20%;
      width: 90%;
      background-color: rgba(255, 255, 255, 0.248);
      border-radius: 0.25rem;
      border: 1px solid rgba(255, 255, 255, 0.182);
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.56);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .content-phone {
        height: 100%;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        h1 {
          font-size: 1.2rem;
          color: #232323;
          font-family: "Plus Jakarta Sans", sans-serif;
          padding: 10px 10px;
          text-align: center;
        }
        a {
          font-size: 1rem;
          font-family: "Plus Jakarta Sans", sans-serif;
          color: #232323;
          text-align: left;
          padding: 10px 10px;
        }
      }
      .img-phone {
        height: 100%;
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: drop-shadow(0px 0px 5px black);
        img {
          width: 60%;
          padding: 30px 30px;
          border-radius: 0.25rem;
        }
      }
    }
  }
}
@media only screen and (max-width: 900px) {
  #section3 {
    height: 215vh !important;
    p {
      font-size: 3rem;
      padding-top: 5rem !important;
    }
    .achievements-box1,
    .achievements-box2 {
      display: none;
    }
    .achievements-box-phone {
      display: flex;
    }
  }
}
</style>
