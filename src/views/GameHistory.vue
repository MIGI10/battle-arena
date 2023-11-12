<template>
    <main>
    <div class="player-game-history">
        <div class="top-bar">      
            <button class="back-btn"><img class="icon" src="./../assets/back.png"></button>
            <div class="settings-container">
                <button @click="toggleDropdownSett" class="setting-button"><img class="icon" src="./../assets/settings.png"></button>
                <div v-if="showDropdownSett" class="dropdown-optionsSett">
                    <div v-for="option in stateOptionsSett" :key="option" @click="selectStateSett(option)">
                                {{ option }}
                    </div>
                </div>
            </div>
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
            showDropdownSett: false,
            stateOptionsSett: ["Log out", "Delete Account"]
        };
    },
    methods: {
        toggleDropdownSett() {
            this.showDropdownSett = !this.showDropdownSett;
        },
        selectStateSett(option) {
            this.showDropdownSett = false;
        },
    },
};
</script>

<style scoped>
.player-game-history {
    text-align: center;
}

.settings-container {
  position: relative;
  display: inline-block;
}

.state-dropdownSett {
    border: 1px solid #ccc;
    cursor: pointer;
    margin: 0 auto;
}

.dropdown-optionsSett {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 0 auto;
}

.dropdown-optionsSett div {
    cursor: pointer;
}

.dropdown-optionsSett div:hover {
    background-color: rgb(82, 108, 255);
    transition-duration: 0.1s;
}

.dropdown-optionsSett div:active {
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