<template>
    <div class="wrapper">
        <TheHeader />
        <MovieList v-if="movies.length" :movies="movies"/>
        <PopularMovieList :movies="popularMovies" />
    </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex';
import TheHeader from '../components/TheHeader.vue'
import MovieList from '../components/MovieList.vue'
import PopularMovieList from '../components/PopularMovieList.vue'

export default {
    name: 'HomeView',
    components: 
    {
        TheHeader,
        MovieList,
        PopularMovieList,
    },
    computed:
    {
        ...mapGetters(['getMovies', 'getPopularMovies']),
        movies()
        {
            return this.getMovies;
        },
        popularMovies()
        {
            return this.getPopularMovies;
        }
    },
    methods: {
        ...mapActions(['searchPopularMovies']),
    },
    mounted() {
        this.searchPopularMovies();
    },

}
</script>
