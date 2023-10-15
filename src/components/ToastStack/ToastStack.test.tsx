import { render, screen } from '@testing-library/react';
import ToastStack from '.';
import { dummyResponse } from '../../mocks/dummyResponse';

//- When the user loads the page, the notifications should load without any further user interaction;
test('notifications render on page load', async () => {
    render(<ToastStack />);
    const notifications = await screen.findAllByRole('listitem');
    expect(notifications).toHaveLength(dummyResponse.data.length);
});
