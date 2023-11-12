<template>
    <main>
        <div class="gameplay">
        <div class="top-bar">      
            <button class="leave-button">Leave</button>
        </div>
        <h1 class="title">Battle Arena</h1>
        </div>
    </main>
</template>

<style scoped>
.gameplay {
    text-align: center;
}

.top-bar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.leave-button {
    font-size: 1.5rem;
    cursor: pointer;
}

.leave-button:hover {
    background-color: rgb(82, 108, 255);
    transition-duration: 0.1s;
}

.leave-button:active {
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
</style>