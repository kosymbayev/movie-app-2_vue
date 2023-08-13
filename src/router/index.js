import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetailView from "../views/MovieDetailView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
    {
        path: '/movie/:id',
        name: 'Movie Detail',
        component: MovieDetailView
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;