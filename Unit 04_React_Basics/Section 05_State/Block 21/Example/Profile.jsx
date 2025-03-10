import { useState } from 'react';

export default function Profile() {
    const [user, setUser] = useState({ name: 'Alice', age: 25 });

    function increaseAge() {
        setUser({ ...user, age: user.age + 1 });
    }

    return (
        <button onClick={increaseAge}>{user.name} is {user.age} years old</button>
    );
}