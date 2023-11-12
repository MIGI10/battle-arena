<template>
    <main>
    <div class="player-game-history">
        <div class="top-bar">      
            <button class="back-btn"><img class="icon" src="./../assets/back.png"></button>
        <button class="setting-button"><img class="icon" src="./../assets/settings.png"></button>
        </div>
        <h1 class="title">Player {{ playerName }}'s Game History</h1>
        <div class="percentage-bar">
            <div class="percentage" :style="{ width: `${percentage}%` }">{{ percentage }}%</div>
        </div>
        <div class="game-data-scroll-bar">
            <!-- games of the player to put with the API -->
        </div>
    </div>
  </main>
</template>

<script>
export default {
    data() {
        return {
            playerName: "John",
            percentage: 60,
        };
    },
};
</script>

<style scoped>
.player-game-history {
    text-align: center;
}

.title {
    display: inline-block;
    text-align: center;
    margin-top: 25px;
    font-size: 50px;
}

.percentage-bar {
    width: 50%;
    margin: 0 auto;
    border: 1px solid #ccc;
}

.percentage {
    background-color: #4caf50;
    color: #fff;
    height: 30px;
    line-height: 30px;
    text-align: center;
}

.game-data-scroll-bar {
    width: 80%;
    height: 200px;
    margin: 20px auto;
    border: 1px solid #ccc;
    overflow-y: scroll;
}
</style>