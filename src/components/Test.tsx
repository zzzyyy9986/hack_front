import { useStore } from "../store/root-store-context";

export const Test = () => {
  const { tasksGl } = useStore();

  return <div>{tasksGl.t}</div>;
};
