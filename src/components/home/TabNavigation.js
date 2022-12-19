import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BsFillStarFill } from 'react-icons/bs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function TabNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/favorites">
          <BottomNavigationAction
            label="Favorites"
            icon={<BsFillStarFill size={25} />}
          />
        </Link>
        <Link to="/">
          <BottomNavigationAction
            label="Home"
            icon={<AiFillHome size={25} />}
          />
        </Link>
        <Link to="/profile">
          <BottomNavigationAction
            label="Profile"
            icon={<CgProfile size={25} />}
          />
        </Link>
      </BottomNavigation>
    </ThemeProvider>
  );
}

export default TabNavigation;
