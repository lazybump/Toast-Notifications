import styled from 'styled-components';
import { UserType } from '../../types';
import Notification from '../Notification';
import { useEffect, useState } from 'react';

const Styles = styled.div`
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
        notifications.forEach((notification, index) => {
            setTimeout(() => {
                removeNotification(notification.key);
            }, 5000);
        });

        console.log('USE EFFECT HAS RAN');
    });

    return (
        <div>
            <Styles>
                {notifications.map((notification, index) => (
                    <Notification key={index} notification={notification} />
                ))}
            </Styles>
        </div>
    );
}

export default ToastStack;
