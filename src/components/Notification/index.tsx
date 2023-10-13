import styled from 'styled-components';
import { UserType } from '../../types';
import liveIcon from '../../assets/live.svg';
import closeBtn from '../../assets/close.svg';

const NotificationStyles = styled.div`
    background-color: #a7d9ec;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
`;

const PictureStyles = styled.img`
    border-radius: 50%;
`;

// const TextContainer = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

interface Props {
    user: UserType;
}

function Notification({ user }: Props) {
    return (
        <NotificationStyles>
            <PictureStyles
                src={user.pictures.thumbnail}
                alt="Profile picture"
            />
            <div>
                <p>{user.username}</p>
                <p>Has gone live - watch now</p>
            </div>
            <img src={liveIcon} alt="" />
            <img src={closeBtn} alt="" />
        </NotificationStyles>
    );
}

export default Notification;
