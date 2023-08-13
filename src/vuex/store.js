import { createStore } from 'vuex'
import axios from 'axios'
import env from '../env'

export default createStore({
    state: 
    {
        movies: [],
        popularMovies: [],
        moviesPage: 1,
        moviesQuery: ''
    },

    mutations:
    {
        setMoviesPage(state)
        {
            state.moviesPage += 1;
        },
        setMoviesFirstPage(state)
        {
            state.moviesPage = 1;
        },
        // SEARCH
        setMovies(state, movies)
        {
            state.movies = movies;
        },
        setMoviesMore(state, movies)
        {
            state.movies = [...state.movies, ...movies];
        },
        setMoviesQuery(state, query)
        {
            state.moviesQuery = query;
        },
        // POPULAR
        setPopularMovies(state, popularMovies)
        {
            state.popularMovies = popularMovies;
        },
        setPopularMoviesMore(state, popularMovies)
        {
            state.popularMovies = [...state.popularMovies, ...popularMovies];
        },
    },

    actions: 
    {
        // SEARCH
        searchMovies({ commit }, query)// Поиск картинок
        {
            commit('setMoviesFirstPage');
            axios
                .get(`https://api.themoviedb.org/3/search/movie?${env.key}&${env.lang}&query=${query}&page=1`)
                //.get(`https://api.themoviedb.org/3/movie/popular?api_key=${env.key}&language=${env.lang}`)
                .then(response => {
                    commit('setMovies', response.data.results);
                    commit('setMoviesQuery', query);
                })
                .catch(error => {
                    console.error('searchMovies:', error);
                })
        },
        searchMoviesMore({ commit })// Дополнение поиска картинок
        {
            commit('setMoviesPage');
            axios
                .get(`https://api.themoviedb.org/3/search/movie?${env.key}&${env.lang}&query=${this.state.moviesQuery}&page=${this.state.moviesPage}`)
                .then(response => {
                    commit('setMoviesMore', response.data.results);
                })
                .catch(error => {
                    console.error('searchMoviesMore:', error);
                })
        },
        // POPULAR
        searchPopularMovies({ commit })
        {
            commit('setMoviesFirstPage');
            axios
                .get(`https://api.themoviedb.org/3/movie/popular?${env.key}&${env.lang}&page=1`)
                .then(response => {
                    commit('setPopularMovies', response.data.results);
                })
                .catch(error => {
                    console.error('searchPopularMovies:', error);
                })
        },
        searchPopularMoviesMore({ commit })
        {
            commit('setMoviesPage');
            axios
                .get(`https://api.themoviedb.org/3/movie/popular?${env.key}&${env.lang}&page=${this.state.moviesPage}`)
                .then(response => {
                    commit('setPopularMoviesMore', response.data.results);
                })
                .catch(error => {
                    console.error('searchPopularMoviesMore:', error);
                })
        },

    },

    getters:
    {
        getMoviePoster: (state) => (movie) => {
            return movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'src/img/no-photo.jpg';
        },
        // SEARCH
        getMovies(state)
        {
            return state.movies;
        },
        // POPULAR
        getPopularMovies(state)
        {
            return state.popularMovies;
        },
    }
})