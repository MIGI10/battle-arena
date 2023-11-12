<template>
    <main>
        <h1>Battle Arena</h1>
        <button>Join</button>
        <button class="register">Register</button>
    </main>
</template>
  
<style scoped>

h1 {
    display: inline-block;
    text-align: center;
    margin-top: 200px;
    font-size: 100px;
}

button {
    width:170px;
    height:70px;
    margin-top:25px;
    margin: 1;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    vertical-align: middle;
    white-space: nowrap;
    font-size: 17px;
}

button:hover {
    background-color: #F3F4F6;
    transition-duration: 0.1s;
}

button:active {
    background-color: #b8b8b8;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
}

button:focus {
    outline: 1px transparent;
}

.register {
    background-color: rgb(117, 138, 255);
    color: #ffffff;
}

.register:hover {
    background-color: rgb(82, 108, 255);
}

.register:active {
    background-color: rgb(22, 57, 255);
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
}

</style>