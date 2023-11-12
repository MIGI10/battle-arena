<template>
    <main>
        <div class="game-finder">
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
        <h1 class="title">Game Finder</h1>
        
        <div class="Search-container">
            <label class="Search-label">Search</label>
            <input type="text" class="search-bar" placeholder="Type to search" />
        </div>
        <div class="filter-container">
            <div class="left-blok">
            <label class="label">State</label>
                <div @click="toggleDropdown" class="state-dropdown">
                    {{ selectedState }}
                    <div v-if="showDropdown" class="dropdown-options">
                        <div v-for="option in stateOptions" :key="option" @click="selectState(option)">
                            {{ option }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="middle-block">
                <label class="label">From date</label>
                <input type="text" class="form-control" placeholder="Select date" />
            </div>
            <div class="right-block">
                <label class="label">Until date</label>
                <input type="text" class="form-control" placeholder="Select date" />
            </div>
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
            selectedState: "Select State",
            showDropdown: false,
            stateOptions: ["Available", "Finished", "All"],
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

<style scoped>
.game-finder {
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

.search-bar {
  width: 50%;
  margin: 0 auto;
}

.filter-container {
    display: flex;
    max-width: 51%;
    margin: 1% auto;
    justify-content: space-between;
}

.right-block,
.middle-block {
    width:15%;
    max-width: 17%;
    text-align: center;
}

.left-block {
    position: relative;
    display: inline-block;
    flex-grow:1;
    flex-shrink:1;
    flex-basis:auto;
    width:15%;
    max-width: 17%;
    text-align: center;
}

.state-dropdown {
    border: 1px solid #ccc;
    cursor: pointer;
    margin: 0 auto;
}

.dropdown-options {
    position: absolute;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 0 auto;
}

.dropdown-options div {
    cursor: pointer;
}

.dropdown-options div:hover {
    background-color: rgb(82, 108, 255);
    transition-duration: 0.1s;
}

.dropdown-options div:active {
    background-color: rgb(22, 57, 255);
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
}

.form-control {
    border: 1px solid #ccc;
    margin: 0 auto;
} 

label {
    color: #555;
    display: block;
    padding: 1px;
}

.game-data-scroll-bar {
    width: 60%;
    height: 200px;
    margin: 20px auto;
    border: 1px solid #ccc;
    overflow-y: scroll;
}
</style>