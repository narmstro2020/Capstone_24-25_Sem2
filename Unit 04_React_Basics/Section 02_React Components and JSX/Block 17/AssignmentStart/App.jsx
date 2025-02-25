import 'react';
import Card from './Card';

const App = () => {
    return (
        <div>
            <Card title="React Basics" description="Learn React" buttonLabel="Start Basics"/>
            <Card title="Advanced React" description="Learn More React" buttonLabel="Start Advanced"/>
        </div>
    );
};

export default App;