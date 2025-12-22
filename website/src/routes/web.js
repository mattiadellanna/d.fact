import Home from '../pages/home';
import Projects from '../pages/projects';
import Contacts from '../pages/contacts';

const Web = [
  {
    path: '/',
    component: Home,
    exact: true,
    public: true,
  },
  {
    label: 'Projects',
    path: '/projects',
    component: Projects,
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
