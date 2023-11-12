<template>
  <main>
    <div class="change-attacks">
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
      <h1 class="title">Change Attacks</h1>
      <div class="scroll-bars-container">
        <div class="left-block">
          <h2 class="equipped-attacks-title">Equipped attacks</h2>
          <div class="equipped-attacks-scroll-bar">
            <!-- equipped attacks to put with the API -->
          </div>
        </div>
        <div class="right-block">
          <h3 class="backpack-attacks-title">Backpack attacks</h3>
            <div class="backpack-attacks-scroll-bar">
              <!-- backpacked attacks to put with the API -->
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

<style>

.change-attacks {
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

.scroll-bars-container {
  display: flex;
  margin: -2% auto;
}

.left-block {
    flex:1;
    margin: 0 10%;
    max-width: 35%;
    margin-top: 50px;

}

.right-block {
    flex:1;
    margin: 0 10%;
    max-width: 35%;
}

.equipped-attacks-title{
    font-size: 25px;
}

.equipped-attacks-scroll-bar {
    max-width: 100%;
    height: 300px;
    border: 5px solid #ccc;
}

.backpack-attacks-title{
    font-size: 25px;
}

.backpack-attacks-scroll-bar {
    max-width: 100%;
    height: 400px;
    border: 5px solid #ccc;
    overflow-y: scroll;
}

</style>