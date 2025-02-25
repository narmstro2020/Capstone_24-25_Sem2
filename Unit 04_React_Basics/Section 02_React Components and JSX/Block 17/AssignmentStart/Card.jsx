import 'react';


const Card = (props) => {
    return (
        <div>
            <h2>{/*TODO: access props.title */}</h2>
            <p>{/* TODO: access props.description*/}</p>
            {/* eslint-disable-next-line react/prop-types */}
            <button>{props.buttonLabel}</button>
        </div>
    );
};

export default Card;