import styled from 'styled-components';
import { UserType } from '../../types';
import liveIcon from '../../assets/live.svg';
import closeBtn from '../../assets/close.svg';

const NotificationStyles = styled.div`
    background-color: #a7d9ec;
    width: 300px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

const MessageStyles = styled.p`
    font-size: 12px;
    color: slategrey;
`;

interface Props {
    notification: UserType;
}

function Notification({ notification }: Props) {
    return (
        <NotificationStyles>
            <PictureStyles
                src={notification.pictures.small}
                alt="Profile picture"
            />
            <TextStyles>
                <p>{notification.username}</p>
                <MessageStyles>Has gone live - watch now</MessageStyles>
            </TextStyles>
            <img src={liveIcon} alt="" />
            <img src={closeBtn} alt="" />
        </NotificationStyles>
    );
}

export default Notification;
