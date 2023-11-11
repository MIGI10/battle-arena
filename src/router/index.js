import { createRouter, createWebHistory } from 'vue-router'
import Initial from '../views/Initial.vue'
import Register from '../views/Register.vue'
import Join from '../views/Join.vue'
import Main from '../views/Main.vue'
import Store from '../views/Store.vue'
import Games from '../views/Games.vue'
import Gameplay from '../views/Gameplay.vue'
import GameHistory from '../views/GameHistory.vue'
import ChangeAttacks from '../views/ChangeAttacks.vue'

const routes = [
    {
        path: '/',
        name: 'Initial',
        component: Initial
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/join',
        name: 'Join',
        component: Join,
    },
    {
        path: '/main',
        name: 'Main',
        component: Main,
    },
    {
        path: '/store',
        name: 'Store',
        component: Store,
    },
    {
        path: '/games',
        name: 'Games',
        component: Games,
    },
    {
        path: '/gameplay',
        name: 'Gameplay',
        component: Gameplay,
    },
    {
        path: '/gamehistory',
        name: 'GameHistory',
        component: GameHistory,
    },
    {
        path: '/changeattacks',
        name: 'ChangeAttacks',
        component: ChangeAttacks,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router