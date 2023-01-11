// routes
import { PATH_PAGE } from '../../../routes/paths';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="material-symbols:home-outline-rounded" />,
    path: '/',
  },
  { title: 'Learning', icon: <Iconify icon="eva:book-open-outline" />, path: PATH_PAGE.learn },
  {
    title: 'Translation',
    icon: <Iconify icon="ant-design:translation-outlined" />,
    path: PATH_PAGE.translation,
  },
  { title: 'Account', icon: <Iconify icon="ic:outline-account-circle" />, path: PATH_PAGE.account },
  {
    title: 'Components',
    icon: <Iconify icon="ic:round-grain" />,
    path: PATH_PAGE.components,
  },
];

export default navConfig;
