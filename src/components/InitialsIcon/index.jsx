import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { Icon } from './styled';

function ExtractInitials(name) {
  if (!name) return false;

  try {
    const names = name.split(' ');
    const initiais = names.map((n) => n.substring(0, 1));

    if (initiais.length === 1) return initiais[0];

    return `${initiais[0]}${initiais[initiais.length - 1]}`;
  } catch {
    return false;
  }
}

export default function InitialsIcon(props) {
  const { name, size, fontSize, effect } = props;
  const initiais = ExtractInitials(name);

  if (initiais)
    return (
      <Icon size={size} fontSize={fontSize} effect={effect}>
        {initiais}
      </Icon>
    );

  return <FaUserCircle size={size} />;
}

InitialsIcon.defaultProps = {
  effect: '',
};

InitialsIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  effect: PropTypes.string,
};
