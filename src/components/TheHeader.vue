<template>
    <header class="header">
        <div class="container">
            <router-link to='/' class="logo">Logo</router-link>
            <SearchForm v-if="this.$route.path === '/'" @search="searchMovies" />
        </div>
    </header>
</template>

<script>
import { mapActions } from 'vuex'
import SearchForm from './SearchForm.vue'

export default {
    name: 'TheHeader',
    components:
    {
        SearchForm
    },
    methods:
    {
        ...mapActions(['searchMovies'])
    }
};
</script>

<style>
.header
{
    background: #181818;
}
.header .container
{
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo
{
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
}

@media screen and (max-width: 420px) {
    .header .container {
        flex-direction: column;
        gap: 20px;
    }
}
</style>