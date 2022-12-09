import { createRouter, createWebHashHistory} from 'vue-router'
import BasketComp from "./views/Basket.vue"
import HomeComp from "./views/Home.vue"
import ShowCat from "./views/ShowCat.vue"
import ShowItem from "./views/ShowItem.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: HomeComp, name: 'home'},
        {path: '/basket', component: BasketComp, name: 'basket'},
        {path: '/cat/:cat', component: ShowCat, name: "cat"},
        {path: '/showitem/:id', component: ShowItem, name: "showitem"}
    ]
})