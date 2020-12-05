import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Covid App API Project</p>
        <ul>
          <li>
            <Link style={{color:'white'}} to="/">[Home]</Link>
          </li>
          <li>
          <Link style={{color:'white'}} to="/Cases-Charts/">[Choropleth Map]</Link>
          </li>
            <li>
          <Link style={{color:'white'}} to="/Info/">[!!!More Info!!!]</Link>
          </li>
              <li>
          <Link style={{color:'white'}} to="/Cases-Charts/">[Corona Virus Cases Bar Graphs]</Link>
          </li>
          <li>
      <Link style={{color:'white'}} to="/Choropleth/">[Choropleth Map]</Link>
      </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
