import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders booking form with required fields', () => {
    render(<BookingForm />);

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  });

  test('displays error messages when required fields are empty', () => {
    render(<BookingForm />);
    
    fireEvent.click(screen.getByText(/Submit/i));

    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
  });

  test('submits form successfully with valid data', () => {
    render(<BookingForm />);
    
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-12-01' } });
    
    fireEvent.click(screen.getByText(/Submit/i));
    
    expect(screen.queryByText(/Name is required/i)).toBeNull();
    expect(screen.queryByText(/Email is required/i)).toBeNull();
    expect(screen.queryByText(/Date is required/i)).toBeNull();
    
    expect(window.alert).toHaveBeenCalledWith('Booking Successful!');
  });
});
