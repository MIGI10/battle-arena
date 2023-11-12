<template>
    <main>
        <div class="game-finder">
        <div class="top-bar">      
            <button class="back-btn"><img class="icon" src="./../assets/back.png"></button>
            <button class="setting-button"><img class="icon" src="./../assets/settings.png"></button>
        </div>
        <h1 class="title">Game Finder</h1>

        <div class="game-data-scroll-bar">
            <!-- games of the player to put with the API -->
        </div>
        </div>
    </main>
</template>

<style scoped>
.game-finder {
    text-align: center;
}

.title {
    display: inline-block;
    text-align: center;
    margin-top: 25px;
    font-size: 50px;
}

.game-data-scroll-bar {
    width: 80%;
    height: 200px;
    margin: 20px auto;
    border: 1px solid #ccc;
    overflow-y: scroll;
}
</style>