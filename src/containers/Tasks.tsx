import { useEffect } from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useTasks } from '../hooks/useTasks';
import Text from '../components/Text';

export const Tasks = (): JSX.Element => {
  const { state: themeState } = useThemeContext();
  const {
    updateTasks,
    tasks,
    deleteTask,
    handleDescriptionInputChange,
    handleAddTaskClick,
    description
  } = useTasks();

  useEffect(() => {
    updateTasks();
  }, []);

  return (
    <div className={`content ${themeState.theme}`}>
      <h1>
        <Text>Tasks</Text>
      </h1>
      <div>
        <h4>
          <Text>New Task</Text>
        </h4>
        <input
          placeholder={`Description`}
          onChange={handleDescriptionInputChange}
          value={description}
        />
        <button
          onClick={(e) => {
            handleAddTaskClick();
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.description}{' '}
              <button
                onClick={() => {
                  deleteTask(index);
                }}
                type={`button`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
