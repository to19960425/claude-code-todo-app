import type { Todo } from "~/types/todo";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
      />
      <div className="flex-1">
        <h3 className={`font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
          {todo.title}
        </h3>
        {todo.description && (
          <p className={`text-sm mt-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
            {todo.description}
          </p>
        )}
      </div>
    </div>
  );
}