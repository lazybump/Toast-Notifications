import { useEffect, useState } from 'react';
import Notification from './components/Notification';
import { UserType, PicturesType } from './types';
import ToastStack from './components/ToastStack';

function App() {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        fetch('https://api.mixcloud.com/spartacus/following?limit=10')
            .then((response) => response.json())
            .then((result) => {
                setUsers(result.data);
            });
    }, []);

    console.log('USERS  ', users);

    return (
        <div>
            <ToastStack users={users} />
        </div>
    );
}

export default App;
