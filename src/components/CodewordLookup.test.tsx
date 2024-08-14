import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import CodewordLookup from './CodewordLookup';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('CodewordLookup Component', () => {
  test('renders input and button', () => {
    render(<CodewordLookup />);

    expect(screen.getByPlaceholderText(/enter codeword/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /lookup/i })).toBeInTheDocument();
  });

  test('displays action id on successful lookup', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { id: 'alert' } });

    render(<CodewordLookup />);

    fireEvent.change(screen.getByPlaceholderText(/enter codeword/i), { target: { value: '5001' } });
    fireEvent.click(screen.getByRole('button', { name: /lookup/i }));

    const actionId = await screen.findByText((content, element) => {
      return element?.textContent === 'Action ID: alert';
    });
    expect(actionId).toBeInTheDocument();
  });

  test('displays error message on failed lookup', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Codeword not found'));

    render(<CodewordLookup />);

    fireEvent.change(screen.getByPlaceholderText(/enter codeword/i), { target: { value: '9999' } });
    fireEvent.click(screen.getByRole('button', { name: /lookup/i }));

    const errorMessage = await screen.findByText(/codeword not found/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
