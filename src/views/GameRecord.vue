<template>
  <main>
    <div class="games-record">
      <div class="top-bar">
        <button class="back-btn"><img class="icon" src="./../assets/back.png"></button>
        <button class="setting-button"><img class="icon" src="./../assets/settings.png"></button>
      </div>
      <h1 class="title">{{ gameName }}</h1>
      <div class="info-container">
        <p class="info-text">Size: {{ rows }}x{{ columns }}</p>
      </div>
    </div>  
  </main>
</template>

<script>
export default {
    data() {
        return {
            gameName: "The Great Game",
            rows: 6,
            columns: 8,
        };
    },
};
</script>


<style>

.games-record {
    text-align: center;
    margin: 0;
}

.title {
    display: inline-block;
    text-align: center;
    margin-top: 25px;
    font-size: 50px;
}

.info-container {
  display: flex;
  margin: -2% auto;
}

</style>