import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../Utils/constants';
import SearchBar from './Search/SearchBar';

const Navbar = () => (
  <AppBar position="sticky" sx={{ background: 'black', zIndex: 10 }}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Toolbar>
  </AppBar>
);

export default Navbar;
