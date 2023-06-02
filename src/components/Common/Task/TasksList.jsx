import Wrapper from "../../common/Wrapper/Wrapper"
import TaskRow from "./TaskRow";

const tasksList = [
  { id: 1, title: "این یک تیتر برای این تسک است.", deadline: "۶ آبان" },
  { id: 2, title: "این یک تیتر برای این تسک است.", deadline: "۷ آبان" },
  { id: 3, title: "این یک تیتر برای این تسک است.", deadline: "۸ آبان" },
];

const TasksList = (props) => {
  return (
    <Wrapper>
      <ul>
        {tasksList.map((item) => (
          <TaskRow
            key={item.id}
            title={item.title}
            deadline={item.deadline}
            statusColor={props.statusColor}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

export default TasksList;
