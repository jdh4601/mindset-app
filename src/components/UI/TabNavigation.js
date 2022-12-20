import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GoGraph } from 'react-icons/go';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrpper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function TabNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Wrpper>
      <ThemeProvider theme={darkTheme}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link to="/statistic">
            <BottomNavigationAction
              label="Statistic"
              icon={<GoGraph size={25} />}
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
    </Wrpper>
  );
}

export default TabNavigation;
