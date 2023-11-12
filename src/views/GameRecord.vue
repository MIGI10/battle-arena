<template>
  <main>
    <div class="games-record">
      <div class="top-bar">
        <button class="back-btn"><img class="icon" src="./../assets/back.png"></button>
        <button class="setting-button"><img class="icon" src="./../assets/settings.png"></button>
      </div>
      <h1 class="title">{{ gameName }}</h1>
      <p class="info-text"> Size: {{ rows }}x{{ columns }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ creationDate }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Max HP: {{ hpMax }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Winner: {{ winner }}</p>
      <div class="log-scroll-bar">
        <!-- game log to be put with the API -->
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
            creationDate: "27/03/2023",
            hpMax: 10,
            winner: "theBigAl",
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

.info-text {
    width: 60%;
    margin: 0 0;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    font-size: 25px;
    color: #ffffff;
    background-color: rgb(117, 138, 255);
    padding: 13px 13px;
}

.log-scroll-bar {
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    max-width: 900px;
    height: 300px;
    border: 5px solid #ccc;
    overflow-y: scroll;

}

</style>