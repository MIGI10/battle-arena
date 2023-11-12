<template>
    <main>
        <div class="main">
            <div class="top-bar">      
                <div class="settings-container">
                    <button @click="toggleDropdownSett" class="setting-button"><img class="icon" src="./../assets/settings.png"></button>
                    <div v-if="showDropdownSett" class="dropdown-optionsSett">
                        <div v-for="option in stateOptionsSett" :key="option" @click="selectStateSett(option)">
                                    {{ option }}
                        </div>
                    </div>
                </div>
            </div>
            <h1 class="title">Battle Arena</h1>
            <div class="user-container">
                <div class="user-left-block">
                    <img class="user-icon" src="./../assets/vue.svg">
                </div>
                <div>
                    <h1><b>Username</b></h1>
                </div>
                <div class="user-right-block">
                    <p><b>Level 10</b></p>
                    <p><b>300 Coins</b></p> 
                </div>
            </div>
            <div class="percentage-bar">
                <div class="percentage" :style="{ width: `${percentage}%` }">{{ percentage }} XP / 100 XP</div>
            </div>
            <div class="scroll-bars-container">
                <div class="left-block">
                    <h2 class="but-title">Attack set</h2>
                    <div class="buy-scroll-bar">
                        <!-- equipped attacks to put with the API -->
                    </div>
                    <button class="blue-button">Store</button>
                    <button class="white-button">Change attacks</button>
                </div>
                <div class="center-block">
                    <h3 class="create-title">Available games</h3>
                    <div class="create-scroll-bar">
                        <!-- games fetched with API -->
                    </div>
                    <button class="white-button">Game Finder</button>
                    <button class="white-button">Create game</button>
                </div>
                <div class="right-block">
                    <h4 class="sell-title">Ranking</h4>
                    <div class="ranking-search" >
                        <input type="text" style="height:20px;" placeholder="Type to search" />                       
                    </div>
                    <div class="sell-scroll-bar">
                    <!-- players fetched with API -->
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            percentage: 76,
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
.main {
    text-align: center;
}

.settings-container {
    margin-left: auto;
    margin-right: 0;
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
    margin-top: -15px;
    font-size: 60px;
}


.scroll-bars-container {
  display: flex;
  margin: -2% auto;
}

.left-block {
    flex:1;
    max-width: 20%;
    margin-top: 0;
}

.center-block {
    flex:1;
    max-width: 20%;
    margin-top: 50px;
}

.right-block {
    flex:1;
    max-width: 20%;
    margin-top: 0;
}

.buy-title{
    font-size: 25px;
}

.buy-scroll-bar {
    max-width: 100%;
    height: 225px;
    border: 5px solid #ccc;
}

.create-title{
    font-size: 25px;
}

.create-scroll-bar {
    max-width: 100%;
    height: 350px;
    border: 5px solid #ccc;
    overflow-y: scroll;
}

label {
    cursor: pointer;
    color: #555;
    display: block;
    padding: 10px;
    margin-top: 6px;
}

input[type="text"] {
    height: 60px;
    width: 90%;
    font-weight: bold;
    font-size:15px;
    font-color: black;
}

.blue-button {
    margin-top: 15px;
    width:70%;
    height:40px;
    background-color: rgb(117, 138, 255);
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 40px;
    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    padding: 6px 16px;
    touch-action: manipulation;
    white-space: nowrap;
    font-size: 14px;
}

.blue-button:hover {
    background-color: rgb(82, 108, 255);
    transition-duration: 0.1s;
}

.blue-button:active {
    background-color: rgb(22, 57, 255);
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
}

.blue-button:focus {
    outline: 1px transparent;
}

.white-button {
    margin-top: 15px;
    width:70%;
    height:40px;
    background-color: #FAFBFC;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 40px;
    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
    box-sizing: border-box;
    color: #24292E;
    cursor: pointer;
    display: inline-block;
    padding: 6px 16px;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    touch-action: manipulation;
    white-space: nowrap;
    font-size: 14px;
}

.white-button:hover {
    background-color: #F3F4F6;
    transition-duration: 0.1s;
}

.white-button:active {
    background-color: #b8b8b8;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
}

.white-button:focus {
    outline: 1px transparent;
}

.sell-title{
    font-size: 25px;
}

.sell-scroll-bar {
    max-width: 100%;
    height: 300px;
    border: 5px solid #ccc;
    overflow-y: scroll;
    margin: -7% 0;
}


.user-container {
  display: flex;
  justify-content: center;
}

.user-left-block {
    flex:1;
    max-width: 5%;
    margin-top: 20px;
}

.user-right-block {
    flex:1;
    max-width:5%;
    margin-top: 0;
    margin-left: 10px;
}

.coin-icon {
  height: 25px;
  width: 25px;
}

.percentage-bar {
    width: 20%;
    margin: 0 auto;
    border: 1px solid #ccc;
}

.percentage {
    background-color: #4caf50;
    color: #fff;
    height: 15px;
    line-height: 15px;
    text-align: center;
}

.ranking-search {
    height: 8%;
    width: 100%;
    margin: 0 auto;
}

</style>