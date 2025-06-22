import { render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import type { Todo } from '~/types/todo';

const mockTodo: Todo = {
  id: 1,
  title: 'Test Todo',
  description: 'Test Description',
  completed: false,
  createdAt: new Date('2024-01-01'),
};

const completedTodo: Todo = {
  id: 2,
  title: 'Completed Todo',
  description: 'Completed Description',
  completed: true,
  createdAt: new Date('2024-01-01'),
};

describe('TodoItem', () => {
  it('renders todo item with title and description', () => {
    render(<TodoItem todo={mockTodo} />);
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders checkbox unchecked for incomplete todo', () => {
    render(<TodoItem todo={mockTodo} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('renders checkbox checked for completed todo', () => {
    render(<TodoItem todo={completedTodo} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('applies strikethrough styles to completed todo', () => {
    render(<TodoItem todo={completedTodo} />);
    
    const title = screen.getByText('Completed Todo');
    expect(title).toHaveClass('line-through');
  });

  it('renders todo without description', () => {
    const todoWithoutDesc = { ...mockTodo, description: undefined };
    render(<TodoItem todo={todoWithoutDesc} />);
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.queryByText('Test Description')).not.toBeInTheDocument();
  });
});