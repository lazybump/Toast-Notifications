import styled from 'styled-components';
import { UserType } from '../../types';
import Notification from '../Notification';
import { useEffect, useState } from 'react';

const ToastStackStyles = styled.ul`
    position: fixed;
    top: 16px;
    right: 20px;
    z-index: 10;
    border: 2px solid green;
`;

function ToastStack() {
    const [notifications, setNotifications] = useState<UserType[]>([]);

    useEffect(() => {
        fetch('https://api.mixcloud.com/spartacus/following?limit=10')
            .then((response) => response.json())
            .then((result) => {
                setNotifications(result.data);
            });
    }, []);

    const removeNotification = (key: string) => {
        setNotifications((prev) =>
            prev.filter((notification) => notification.key !== key)
        );
    };

    return (
        <ToastStackStyles>
            {notifications.map((notification) => (
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
