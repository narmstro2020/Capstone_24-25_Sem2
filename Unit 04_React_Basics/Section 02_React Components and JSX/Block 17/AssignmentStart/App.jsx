import 'react';
import Card from './Card.jsx';

const App = () => {
    const card1Title = "Card 1";
    const card1Description = "This is the first card's description";
    const card1ButtonLabel = "Button 1";
    return (
        <>
            <Card title={card1Title}
                  description={card1Description}
                  label={card1ButtonLabel}/>

            {/* TODO: Make another card  */}
        </>
    );

};

export default App;

