<template>
  <div class="quote-box">
    <h2>
      "The GT3 isn't just a car; it's an experience that connects driver and
      machine in perfect harmony."
    </h2>
  </div>
</template>
<style lang="scss">
.quote-box {
  height: 25vh;
  width: 100%;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#dfdfdffd, #88888833);
  background-color: #727272;
  h2 {
    color: #cbcbcb;
    font-size: 2rem;
    margin: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-style: italic;
    padding: 5rem 10rem;
  }
}
@media only screen and (max-width: 900px) {
  .quote-box {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    h2 {
      padding: 0 !important;
      text-align: center;
      color: #202020;
    }
  }
}
</style>
