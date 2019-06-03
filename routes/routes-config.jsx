import Index from '../views/Index.jsx';
import About from '../views/About.jsx';
import Articles from '../views/Articles.jsx';
import Article from '../views/Article.jsx';
import Admin from '../views/Admin.jsx';


const Routes_config =  [
    {
    path: '/',
    exact: true,
    component: Index
    },
    {
    path: '/about',
    exact: true,
    component: About
    },
    {
    path: '/articles',
    exact: true,
    component: Articles
    },
    {
    path: '/articles/:article',
    exact: true,
    component: Article
    },
    {
    path: '/admin',
    exact: true,
    component: Admin
    }
]

export default Routes_config