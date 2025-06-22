import type { Route } from "./+types/home";
import { TodoList } from "~/components/TodoList";
import { sampleTodos } from "~/types/todo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TODOアプリ" },
    { name: "description", content: "シンプルなTODO管理アプリ" },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  return {
    todos: sampleTodos,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <TodoList todos={loaderData.todos} />;
}
