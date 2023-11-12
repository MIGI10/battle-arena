<template>
  <main>
    <div class="store">
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
      <h1 class="title">Store</h1>
      <div class="scroll-bars-container">
        <div class="left-block">
          <h2 class="but-title">Buy attacks</h2>
          <div class="buy-scroll-bar">
            <!-- equipped attacks to put with the API -->
          </div>
        </div>
        <div class="center-block">
          <h3 class="create-title">Create attacks</h3>
          <form>
            <div class="create-scroll-bar">
              <label for="attackName"></label>
              <input type="text" id="attackName" name="attackName" placeholder="  Name of the attack">
              <label for="attackX"></label>
              <input type="text" id="attackX" name="attackX" placeholder="  Coordinate X of attack">
              <label for="attackY"></label>
              <input type="text" id="attackY" name="attackY" placeholder="  Coordinate Y of attack">
            </div>
            <button class="create-button">Create attack</button>
          </form>
        </div>
        <div class="right-block">
          <h4 class="sell-title">Sell attacks</h4>
            <div class="sell-scroll-bar">
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

<style scoped>

.store {
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
    max-width: 20%;
    margin-top: 0;
}

.center-block {
    flex:1;
    max-width: 20%;
    margin-top: 10px;
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
    height: 400px;
    border: 5px solid #ccc;
    overflow-y: scroll;
}

.create-title{
    font-size: 25px;
}

.create-scroll-bar {
    max-width: 100%;
    height: 300px;
    border: 5px solid #ccc;
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

.create-button {
    margin-top: 15px;
    width:90%;
    height:60px;
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
    font-size: 15px;
}

.create-button:hover {
    background-color: rgb(82, 108, 255);
    transition-duration: 0.1s;
}

.create-button:active {
    background-color: rgb(22, 57, 255);
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
}

.create-button:focus {
    outline: 1px transparent;
}

.sell-title{
    font-size: 25px;
}

.sell-scroll-bar {
    max-width: 100%;
    height: 400px;
    border: 5px solid #ccc;
    overflow-y: scroll;
    margin: -7% 0;
}

</style>