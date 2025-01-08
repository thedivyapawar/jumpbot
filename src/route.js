import HomePage from "./pages/HomePage.vue"
import WhyBlockchainPage from "./pages/WhyBlockchainPage.vue"
import PricingPage from "./pages/PricingPage.vue"
import HowItWorksPage from "./pages/HowItWorksPage.vue"
import { createRouter, createWebHistory } from "vue-router"

const myRoutes =[
    {
        path:"/",
        component : HomePage,
    },
    {
        path:"/whyblockchain",
        component:WhyBlockchainPage,
    },
    {
        path :"/pricing",
        component : PricingPage
    },
    {
        path:"/howitworks",
        component : HowItWorksPage,
    },
]

const router = createRouter({
    routes : myRoutes,
    history : createWebHistory(),
})

export default router