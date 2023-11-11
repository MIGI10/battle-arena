<template>
    <main>

    </main>
</template>
  
<style scoped>

#product-list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1.5rem;
    align-items: baseline;
    flex-wrap: wrap;
}

h1 {
    display: block;
    text-align: center;
}

.product {
    width: 150px;
}

.product img {
    max-width: 150px;
}

@media (min-width: 801px) {
    h1 {
        text-align: start;
    }
}

</style>