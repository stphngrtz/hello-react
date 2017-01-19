import React from 'react';
import { Link } from 'react-router';

const DetailsLink = ({ id, children }) => (
  <Link
    to={id}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

export default DetailsLink;
