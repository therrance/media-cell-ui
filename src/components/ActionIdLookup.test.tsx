import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import ActionIdLookup from './ActionIdLookup';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ActionIdLookup Component', () => {
  test('renders input and button', () => {
    render(<ActionIdLookup />);

    expect(screen.getByPlaceholderText(/enter action id/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /lookup/i })).toBeInTheDocument();
  });

  test('displays codewords on successful lookup', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { codewords: [5001, 5003] } });

    render(<ActionIdLookup />);

    fireEvent.change(screen.getByPlaceholderText(/enter action id/i), { target: { value: 'alert' } });
    fireEvent.click(screen.getByRole('button', { name: /lookup/i }));

    const codewordListItems = await screen.findAllByRole('listitem');
    expect(codewordListItems).toHaveLength(2);
    expect(codewordListItems[0]).toHaveTextContent('5001');
    expect(codewordListItems[1]).toHaveTextContent('5003');
  });

  test('displays error message on failed lookup', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Action ID not found'));

    render(<ActionIdLookup />);

    fireEvent.change(screen.getByPlaceholderText(/enter action id/i), { target: { value: 'unknown' } });
    fireEvent.click(screen.getByRole('button', { name: /lookup/i }));

    const errorMessage = await screen.findByText(/action id not found/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
