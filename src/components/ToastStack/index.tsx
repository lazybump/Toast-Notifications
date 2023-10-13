import styled from 'styled-components';
import { UserType } from '../../types';
import Notification from '../Notification';

const Styles = styled.div`
    position: fixed;
    top: 0px;
    right: 20px;
    z-index: 10;
`;

interface Props {
    users: UserType[];
}

function ToastStack({ users }: Props) {
    return (
        <div>
            <Styles>
                {users.map((user, index) => (
                    <Notification key={index} user={user} />
                ))}
            </Styles>
        </div>
    );
}

export default ToastStack;
