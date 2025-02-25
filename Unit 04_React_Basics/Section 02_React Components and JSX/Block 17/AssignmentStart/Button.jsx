import 'react';

// eslint-disable-next-line react/prop-types
const Button = ({label, onClick}) => {
    return (
      <button onClick={onClick}>
          {label}
      </button>
    );
};

export default Button;