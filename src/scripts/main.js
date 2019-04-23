// import statements for tasks
import tasks from "./tasks/task-event-handlers";
import taskApi from "./tasks/task-api"
import tasksFromDom from "./tasks/dom-manager"

// GENERATING FORM FOR TASKS
tasksFromDom.taskPost();
tasksFromDom.getPostForPage();
taskApi.getAllTasks();