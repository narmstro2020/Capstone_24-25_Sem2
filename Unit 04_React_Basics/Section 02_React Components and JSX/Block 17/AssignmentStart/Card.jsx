import 'react';

const Card = (props) => {
    return (
      <>
          {/* eslint-disable-next-line react/prop-types */}
          <h1>{props.title}</h1>
          <p>{/*TODO: use the description stored in props here */}</p>
          <button>{/*TODO: use the label stored in props here*/}</button>
      </>
    );
};

export default Card;