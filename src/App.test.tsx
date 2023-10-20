import { act, getAllByRole, render, screen } from '@testing-library/react';
import ToastStack from './components/ToastStack';
import { dummyResponse } from './mocks/dummyResponse';
import userEvent from '@testing-library/user-event';
import Notification from './components/Notification';
jest.useFakeTimers();

//- When the user loads the page, the notifications should load without any further user interaction;
test('notifications render on page load', async () => {
    render(<ToastStack />);

    const notifications = await screen.findAllByRole('listitem');

    expect(notifications).toHaveLength(dummyResponse.data.length);
});

// - When a notification is shown, it should be displayed for a maximum of 5 seconds when there is no user interaction;
test('notification disappears after 5 seconds automatically', async () => {
    render(<ToastStack />);

    const allNotifications = await screen.findAllByRole('listitem');
    const notification1 = allNotifications[0];

    act(() => jest.advanceTimersByTime(5000));
    expect(notification1).not.toBeInTheDocument();
});

// - When a notification is shown, when the user clicks the dismiss icon then it should be dismissed immediately;
test('notification disappears after clicking dismiss button', async () => {
    render(<ToastStack />);

    const allNotifications = await screen.findAllByRole('listitem');
    const notification1 = allNotifications[0];
    const closeButton1 = screen.getAllByRole('button')[0];

    act(() => userEvent.click(closeButton1));
    act(() => jest.advanceTimersByTime(250));
    expect(notification1).not.toBeInTheDocument();
});

test('clicking dismiss button calls removeNotification', () => {
    const notificationObj = dummyResponse.data[0];
    const removeNotification = jest.fn();

    const { container } = render(
        <Notification
            notification={notificationObj}
            removeNotification={removeNotification}
        />
    );

    const [closeButton1] = getAllByRole(container, 'button');
    act(() => userEvent.click(closeButton1));
    act(() => jest.advanceTimersByTime(250));
    expect(removeNotification).toHaveBeenCalledWith(notificationObj.key);
});
