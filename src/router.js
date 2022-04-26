import MainPage from "@/pages/MainPage";
import AboutPage from "@/pages/AboutPage";
import HelloWorld from "@/components/HelloWorld";


export default [
    {path: '/', component: MainPage},
    {path: '/about/:id', component: AboutPage},
    {path: '/tables', component: HelloWorld}
]