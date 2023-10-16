import styled, { keyframes } from 'styled-components';
import { UserType } from '../../types';
import liveIcon from '../../assets/live.svg';
import closeBtn from '../../assets/close.svg';
import { useEffect, useState } from 'react';

const slideIn = keyframes`
    from {
        transform: translateY(-16px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
`;

const slideOut = keyframes`
    from {
        transform: translateY(0px);
        opacity: 1;
    }
    to {
        transform: translateY(-16px);
        opacity: 0;
    }
`;

const NotificationStyles = styled.li`
    background-color: #a7d9ec;
    width: 300px;
    padding: 10px;
    margin-bottom: 16px;
    border-radius: 5px;
    // On appearance
    animation: ${slideIn} 0.25s ease forwards;
    // On disappearance
    &.disappear {
        animation: ${slideOut} 0.25s ease;
    }
`;

const AnchorStyles = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
`;

const PictureStyles = styled.img`
    border-radius: 50%;
`;

const TextStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
`;

const UsernameStyles = styled.p`
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const MessageStyles = styled.p`
    font-size: 12px;
    color: slategrey;
`;

interface Props {
    notification: UserType;
    removeNotification: (key: string) => void;
}

function Notification({ notification, removeNotification }: Props) {
    const [isPresent, setIsPresent] = useState(true);

    const handleClose = (event: React.MouseEvent) => {
        event.preventDefault(); // Prevent the default behavior (e.g., navigation)
        setIsPresent(false);

        setTimeout(() => {
            removeNotification(notification.key);
        }, 250);
    };

    useEffect(() => {
        setTimeout(() => {
            removeNotification(notification.key);
        }, 5000);
    });

    return (
        <NotificationStyles className={isPresent ? '' : 'disappear'}>
            <AnchorStyles
                href={`https://www.mixcloud.com/live/${notification.username}`}
                target="_blank"
            >
                <PictureStyles
                    src={notification.pictures.small}
                    alt="Profile picture"
                />
                <TextStyles>
                    <UsernameStyles>{notification.username}</UsernameStyles>
                    <MessageStyles>Has gone live - watch now</MessageStyles>
                </TextStyles>
                <img src={liveIcon} alt="live button" />
                <button onClick={handleClose}>
                    <img src={closeBtn} alt="close notification button" />
                </button>
            </AnchorStyles>
        </NotificationStyles>
    );
}

export default Notification;
