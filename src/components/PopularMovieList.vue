<template>
    <div class="movies-list" popular>
        <h2 class="movies-list-title">Популярное</h2>

        <div 
            class="movie" 
            v-for='movie in movies' 
            :key='movie.id'
        >

            <router-link 
                :to="'/movie/' + movie.id" 
                class="movie-link"
            >

                <div class="product-image">
                    <img 
                        :src="getMoviePoster(movie)" 
                        alt="Movie Poster"
                    >
                    <div class="type">{{ movie.Type }}</div>
                    <ProgressBar :percent="movie.vote_average" />
                </div>

                <div class="detail">
                    <h3>{{ movie.title }}</h3>
                    <p class="year">{{ movie.release_date.split('-')[0] }}</p>
                </div>
    
            </router-link>
            
        </div>
        <div v-if="movies.length" class="more-btn" @click="this.searchPopularMoviesMore()">
            Загрузить еще
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProgressBar from './ProgressBar.vue'

export default {
    name: 'MovieList',
    components: 
    {
        ProgressBar
    },
    props: 
    {
        movies: Array,
    },
    computed:
    {
        ...mapGetters(['getMoviePoster'])
    },
    methods: {
        ...mapActions(['searchPopularMoviesMore']),
    }
}
</script>

