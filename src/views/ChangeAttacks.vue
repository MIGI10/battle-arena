<template>
  <main>
    <div class="change-attacks">
      <div class="top-bar">
        <button class="arrow-button">←</button>
        <button class="setting-button">⚙️</button>
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

<style>

.change-attacks {
    text-align: center;
    margin: 0;
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