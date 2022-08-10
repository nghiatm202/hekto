import { HeaderAndFooter, MainLayout } from "../layouts"
import { Home, NotFound } from "../pages"

export const publicRoutes = [
    { path: '/', component: Home, layout: HeaderAndFooter },
    { path: '/404', component: NotFound, layout: MainLayout },
]