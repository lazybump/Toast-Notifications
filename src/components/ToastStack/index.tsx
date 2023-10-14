import styled from 'styled-components';
import { UserType } from '../../types';
import Notification from '../Notification';
import { useEffect, useState } from 'react';

const Styles = styled.ul`
    position: fixed;
    top: 0px;
    right: 20px;
    z-index: 10;
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

    useEffect(() => {
        const removeNotification = (key: string) => {
            setNotifications((prev) =>
                prev.filter((notification) => notification.key !== key)
            );
        };
        notifications.forEach((notification) => {
            setTimeout(() => {
                removeNotification(notification.key);
            }, 5000);
        });
    });

    return (
        <Styles>
            {notifications.map((notification, index) => (
                <Notification key={index} notification={notification} />
            ))}
        </Styles>
    );
}

export default ToastStack;
