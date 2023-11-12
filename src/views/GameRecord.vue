<template>
  <main>
    <div class="games-record">
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
            showDropdownSett: false,
            stateOptionsSett: ["Log out", "Delete Account"]
        };
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        selectState(option) {
            this.selectedState = option;
            this.showDropdown = true;
        },
        toggleDropdownSett() {
            this.showDropdownSett = !this.showDropdownSett;
        },
        selectStateSett(option) {
            this.showDropdownSett = false;
        },
    },
};
</script>


<style>

.games-record {
    text-align: center;
    margin: 0;
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