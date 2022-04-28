import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({Icon, page, className}) => {
  return (
    <RouterLink className={className} to={page}>
        <Icon/>
    </RouterLink>
  )
}


export default Link;