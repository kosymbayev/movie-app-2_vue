<template>
    <div class="wrapper">
        <TheHeader />

        <div class="movie-detail" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }">
            <div class="container">

                <img 
                    :src="'https://image.tmdb.org/t/p/original/'+movie.poster_path" 
                    alt="Movie Poster" 
                    class="movie-detail-img"
                >

                <div class="movie-detail-right">
                    <h2 class="movie-detail-title">{{ movie.title }} <span class="movie-detail-year">({{ movie.release_date.split('-')[0] }})</span></h2>
                    {{ movie.genres.map(genre => genre.name).join(', ') }}
                    <br><br><br>
                    <i style="opacity: 0.8;">{{ movie.tagline }}</i>
                    <br><br><br><br>
                    <ProgressBar :percent="movie.vote_average" />
                    <br>
                    <b style="font-size: 18px;">Обзор</b>
                    <br><br>
                    <p class="movie-detail-plot">{{ movie.overview }}</p>

                </div>


            </div>
        </div>
    </div>
</template>
  
<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
import env from '../env.js';

import TheHeader from '../components/TheHeader.vue'
import ProgressBar from '../components/ProgressBar.vue'

export default {
    name: 'MovieDetail',
    components: 
    {
        TheHeader,
        ProgressBar
    },
    data() {
        return {
            movie: {},
        };
    },
    methods: {
        async fetchMovieDetails() {
            const route = useRoute();
            axios
                .get(`https://api.themoviedb.org/3/movie/${route.params.id}?${env.key}&${env.lang}`)
                .then(response => {
                    console.log(response.data);
                    this.movie = response.data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                })
        },

    },
    beforeMount() {
        this.fetchMovieDetails();
    },
};
</script>
  
<style>
.movie-detail {
    aspect-ratio: 16/9;
    width: 100%;
    height: auto;
    background: #181818;
    background-position: center;
    background-size: cover;
    background-blend-mode: overlay;
}
.movie-detail .container {
    display: grid;
    gap: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
}

.movie-detail-img {
    width: 100%;
    border-radius: 12px;
}

.movie-detail-right {
    color: #f3f3f3

}
.movie-detail-title {
    color: #f3f3f3
}
.movie-detail-year {
    font-weight: normal;
}

@media screen and (min-width: 721px) {
    .movie-detail .container {
        grid-template-columns: 2fr 5fr;
    }
}
@media screen and (max-width: 720px) {
    .movie-detail-img {
        max-width: 300px;
    }
}
</style>
  