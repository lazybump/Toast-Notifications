import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Notification from './components/Notification';

// MY OWN TESTS
//- When the user loads the page, the notifications should load without any further user interaction;
test('notifications automatically show on page load', () => {
    render(<Notification />);
    const notification = screen.getByText(/notification/i);
    expect(notification).toBeInTheDocument();
});
