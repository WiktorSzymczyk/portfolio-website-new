import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
	const { getByText } = render(<App />);
	const component = screen.getByText('Work with me!');
});
