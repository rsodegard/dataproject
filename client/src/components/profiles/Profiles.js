import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Profiles = (props) => {
  const getProfiles = useEffect(() => {});

  return <Link className='fcard'></Link>;
};

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Profiles;
