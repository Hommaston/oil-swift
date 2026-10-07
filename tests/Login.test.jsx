import { describe, test, expect, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../src/components/Login/Login';

describe('Login component', () => {
  test('renders the login form', () => {
    render(<Login />);

    expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });

  test('does not submit when fields are empty', () => {
    const onSubmit = jest.fn();

    render(<Login onSubmit={onSubmit} />);

    fireEvent.click(screen.getByRole('button', { name: 'Log In' }));

    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('does not submit invalid email', () => {
    const onSubmit = jest.fn();

    render(<Login onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'invalid-email' },
    });

    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Log In' }));

    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('does not submit password shorter than 8 characters', () => {
    const onSubmit = jest.fn();

    render(<Login onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'user@example.com' },
    });

    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: '1234567' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Log In' }));

    expect(
      screen.getByText('Password must be at least 8 characters')
    ).toBeInTheDocument();

    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('submits valid login data', () => {
    const onSubmit = jest.fn();

    render(<Login onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'user@example.com' },
    });

    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Log In' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      email: 'user@example.com',
      password: 'password123',
    });
  });
});