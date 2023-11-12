<template>
    <main>
        <div class="gameplay">
            <div class="top-bar">      
                <button class="leave-button">Leave</button>
            </div>
            <h1 class="title">Battle Arena</h1>
            <div class="players-info">
                <div class="player-1">
                    <img src="./../assets/user.png" alt="Player 1 icon">
                    <div>{{ player1 }}</div>
                    <div>HP: {{ p1currentHp }}/{{ p1Hp }}</div>
                </div>
                <h1 class="title">Vs.</h1>
                <div class="player-2">
                    <img src="./../assets/user.png" alt="Player 2 icon">
                    <div>{{ player2 }}</div>
                    <div>HP: {{ p2currentHp }}/{{ p2Hp }}</div>
                </div>
            </div>
            <div class="game-block">
                <div class="controls">
                    <div class="controller">
                        <div class="label">Movement</div>
                        <button class="controller-button">North</button>
                        <div class="horizontal-buttons">
                            <button class="controller-button">West</button>
                            <button class="controller-button">Center</button>
                            <button class="controller-button">East</button>
                        </div>
                        <button class="controller-button">South</button>
                    </div>

                    <div class="controller">
                        <div class="label">Direction</div>
                        <button class="controller-button">North</button>
                        <div class="horizontal-buttons">
                            <button class="controller-button">West</button>
                            <button class="controller-button">East</button>
                        </div>
                        <button class="controller-button">South</button>
                    </div>
                </div>
                <div class="middle-block">
                    <div class="board">
                        <div class="board-column" v-for="col in 5" :key="col">
                        <div class="board-cell" v-for="row in 5" :key="row">
                            <img v-if="row === 2 && col === 2" src="./../assets/character.png" alt="Player1 1" />
                            <img v-else-if="row === 4 && col === 4" src="./../assets/character.png" alt="Player 2" />
                        </div>
                        </div>
                    </div>                
                </div>
                <div class="attack-set">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  data() {
    return {
        player1: "John",
        player2: "Flugencio",
        p1Hp: 5,
        p2Hp: 5,
        p1currentHp: 5,
        p2currentHp: 3
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.gameplay {
    text-align: center
}

.leave-button {
    font-size: 24px;
    color: #ffffff;
    background-color: #C24641;
    cursor: pointer;
}

.leave-button:hover {
    background-color: #F70D1A;
    transition-duration: 0.1s;
}

.leave-button:active {
    background-color: #990000;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
}

.title {
    display: inline-block;
    text-align: center;
    margin-top: 0px;
    font-size: 50px;
}

.players-info {
    display: flex;
    max-width: 60%;
    margin: 1% auto;
    justify-content: space-between;
}

.player1,
.player2 {
    display: flex;
    margin: 1% auto;
    justify-content: space-between;
    margin: 0 auto;
}

.game-block {
    display: flex;
    width: 100%;
}

.controls {
  flex: 0 0 27.5%;
  /*background-color: lightblue;*/
}

.controller {
  margin-bottom: 10%;
}

.label {
    margin-top: 16%;
  font-weight: bold;
  margin-bottom: 2%;
}

.controller-button:hover {
    background-color: rgb(82, 108, 255);
    transition-duration: 0.1s;
}

.controller-button {
    cursor: pointer;
}

.controller-button:active {
    background-color: rgb(22, 57, 255);
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
}

.middle-block {
  flex: 0 0 45%;
  /*background-color: lightgreen;*/
}

.board {
  display: flex;
}

.board-column {
  flex: 1;
  display: flex;
  flex-direction:column;
}

.board-cell {
  border: 1px solid #000;
  padding: 10px;
  text-align: center;
  height: 55px;
}

.board-cell img {
  max-width: 100%;
  max-height: 100%;
}

.attack-set {
  flex: 0 0 27.5%;
  /*background-color: lightcoral;*/
}

</style>