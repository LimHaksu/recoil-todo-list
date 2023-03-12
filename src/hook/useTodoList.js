import { useRecoilValue, useRecoilState } from "recoil";
import {
  todoListStatsState,
  filteredTodoListState,
  todoListFilterState,
  todoListState,
} from "../atom/todoList";

const useTodoList = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
    filteredTodoList,
    filter,
    setFilter,
    setTodoList,
    todoList,
  };
};

export { useTodoList };
