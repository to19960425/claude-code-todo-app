export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

export const sampleTodos: Todo[] = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, Bread, Eggs",
    completed: false,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: 2,
    title: "Call plumber",
    description: "Fix kitchen sink",
    completed: false,
    createdAt: new Date("2024-01-16"),
  },
  {
    id: 3,
    title: "Submit report",
    description: "Due by end of day",
    completed: true,
    createdAt: new Date("2024-01-14"),
  },
  {
    id: 4,
    title: "Schedule meeting",
    description: "With project team",
    completed: false,
    createdAt: new Date("2024-01-17"),
  },
  {
    id: 5,
    title: "Renew gym membership",
    description: "Expires tomorrow",
    completed: true,
    createdAt: new Date("2024-01-13"),
  },
];