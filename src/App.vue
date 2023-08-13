<template>
    <router-view />
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'montserrat', sans-serif;
}
body {
    background: #f3f3f3;
    overflow-x: hidden;
}
a {
    text-decoration: none;
}

input {
    outline: 0;
    border: 0;
}
input::placeholder {
    font-family: 'montserrat', sans-serif;
}

#app {
    width: 100%;
    height: 100%;
}
.wrapper {
    width: 100%;
    height: 100%;
    padding-bottom: 70px;
}
.container {
    max-width: 1360px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
}


</style>