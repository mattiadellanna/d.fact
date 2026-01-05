import Home from '../pages/home';
import Manifesto from '../pages/manifesto';
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
    label: 'manifesto',
    path: '/manifesto',
    component: Manifesto,
    exact: true,
    public: true,
  },
  {
    label: 'portfolio',
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
    label: 'contacts',
    path: '/contacts',
    component: Contacts,
    exact: true,
    public: true,
  },
];

export default Web;
