// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DaoTangle title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DaoTangle/i);
    expect(titleElement).toBeInTheDocument();
});
