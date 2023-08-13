<template>
    <form 
        @submit.prevent="performSearch" 
        class="search-form"
    >
        <input 
            type="text" 
            placeholder="Поиск" 
            v-model="search"
            @keyup.enter="performSearch"
        >
        <input type="submit">
    </form>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    name: 'SearchForm',
    data() {
        return {
            search: '',
        };
    },
    methods: {
        ...mapActions(['searchMovies']),
        performSearch() 
        {
            if (this.search.trim() !== '') 
            {
                this.searchMovies(this.search.trim());
            }
        },
    },
};
</script>

<style>
.search-form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #fff;
    border-radius: 12px;
}
.search-form input[type=text] {
    width: 100%;
    padding: 8px 12px;
    border-radius: 12px 0 0 12px;
    background: #fff;
}
.search-form input[type=text]::placeholder {
    color: rgba(0, 0, 0, 0.4)
}
.search-form input[type=submit] {
    width: 32px;
    min-width: 32px;
    height: 32px;
    border-radius: 0 12px 12px 0;
    font-size: 0;
    background-color: #fff;
    background-image: url(/src/img/search.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 16px;
    cursor: pointer;
}

@media screen and (min-width: 421px) {
    .search-form {
        max-width: 240px;
        width: 100%;
    }
}
</style>