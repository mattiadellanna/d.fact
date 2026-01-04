import Home from '../pages/home';
import Portfolio from '../pages/portfolio';
import Contacts from '../pages/contacts';
import Details from '../pages/details';

const Web = [
  {
    path: '/',
    component: Home,
    exact: true,
    public: true,
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
    component: Portfolio,
    exact: true,
    public: true,
  },
  {
    path: '/portfolio/:slug',
    component: Details,
    exact: true,
    public: true,
  },
  {
    label: 'Contacts',
    path: '/contacts',
    component: Contacts,
    exact: true,
    public: true,
  },
];

export default Web;
