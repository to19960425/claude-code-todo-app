import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';
import { sampleTodos } from '~/types/todo';

describe('TodoList', () => {
  it('renders the main title', () => {
    render(<TodoList todos={sampleTodos} />);
    
    expect(screen.getByText('TODOアプリ')).toBeInTheDocument();
    expect(screen.getByText('Task List')).toBeInTheDocument();
  });

  it('renders all todo items', () => {
    render(<TodoList todos={sampleTodos} />);
    
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Call plumber')).toBeInTheDocument();
    expect(screen.getByText('Submit report')).toBeInTheDocument();
    expect(screen.getByText('Schedule meeting')).toBeInTheDocument();
    expect(screen.getByText('Renew gym membership')).toBeInTheDocument();
  });

  it('renders the add new task input', () => {
    render(<TodoList todos={sampleTodos} />);
    
    const input = screen.getByPlaceholderText('Add new task');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('readonly');
  });

  it('renders the floating action button', () => {
    render(<TodoList todos={sampleTodos} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders empty list when no todos provided', () => {
    render(<TodoList todos={[]} />);
    
    expect(screen.getByText('TODOアプリ')).toBeInTheDocument();
    expect(screen.getByText('Task List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add new task')).toBeInTheDocument();
  });
});