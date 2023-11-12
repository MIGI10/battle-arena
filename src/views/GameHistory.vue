<template>
    <main>
    <div class="player-game-history">
        <div class="top-bar">      
            <button class="arrow-button">←</button>
            <button class="setting-button">⚙️</button>
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

.top-bar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.arrow-button,
.setting-button {
    font-size: 1.5rem;
    cursor: pointer;
}

.arrow-button:hover,
.setting-button:hover {
    background-color: rgb(82, 108, 255);
    transition-duration: 0.1s;
}

.arrow-button:active,
.setting-button:active {
    background-color: rgb(22, 57, 255);
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
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