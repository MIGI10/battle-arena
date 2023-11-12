<template>
    <main>
        <button id="back-btn" class="back-btn"><img class="back-img" src="./../assets/back.png"></button>
        <h1>Join Arena</h1>
        <form onsubmit="return validateForm()">
            <label for="user">Username</label><br>
            <input type="text" id="user" name="user"><br><br>
            <label for="pwd">Password</label><br>
            <input type="password" id="pwd" name="pwd"><br><br>
            <button class="login-btn" type="submit">Login</button>
        </form>
    </main>
</template>
  
<style scoped>

h1 {
    display: inline-block;
    text-align: center;
    margin-top: 100px;
    font-size: 70px;
}

form {
    text-align: center;
}

.back-btn {
    text-align: left;
    cursor: pointer; 
    border: 0px; 
    background-color: transparent; 
}

.back-img {
    height: 50px;
    width: 50px;
}

.login-btn {
    height:35px;
    width:150px;
    margin-top:15px;
    position: relative;
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

.login-btn:hover {
    background-color: rgb(82, 108, 255);
    transition-duration: 0.1s;
}

.login-btn:active {
    background-color: rgb(22, 57, 255);
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
}

.login-btn:focus {
    outline: 1px transparent;
}

</style>