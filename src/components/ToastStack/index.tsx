import styled from 'styled-components';
import { UserType } from '../../types';
import Notification from '../Notification';
import { useEffect, useState } from 'react';

const ToastStackStyles = styled.ul`
    position: fixed;
    top: 16px;
    right: 20px;
`;

function ToastStack() {
    const [notifications, setNotifications] = useState<UserType[]>([]);

    useEffect(() => {
        fetch('https://api.mixcloud.com/spartacus/following?limit=10')
            .then((response) => response.json())
            .then((result) => {
                setNotifications(result.data);
            })
            .catch((error) => {
                console.log('ERROR FETCHING DATA:', error);
            });
    }, []);

    const removeNotification = (key: string) => {
        setNotifications((prev) =>
            prev.filter((notification) => notification.key !== key)
        );
    };

    return (
        <ToastStackStyles>
            {notifications.slice(0, 3).map((notification) => (
                <Notification
                    key={notification.key}
                    notification={notification}
                    removeNotification={removeNotification}
                />
            ))}
        </ToastStackStyles>
    );
}

export default ToastStack;
