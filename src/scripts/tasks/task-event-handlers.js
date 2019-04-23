import getAllTasks from "./task-api";
import tasks from "./dom-manager";

const clearElement = domElement => {
    while (domElement.firstChild) {
        domElement.removeChild(domElement.firstChild);
    }
}

console.log("Hello")

const taskForm = {
  buildTaskForm() {

    const taskContainer = document.querySelector("#taskInputForm")

    clearElement(taskContainer);

    const taskTitleLabel = document.createElement("label");
    taskTitleLabel.textContent = "Task: ";
    const taskTitleInput = document.createElement("input");
    taskTitleInput.id = "task-title-input";

    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Date: ";
    const dateInput = document.createElement("input");
    dateInput.id = "task-date-input";

    const saveTaskButton = document.createElement("button");
    saveTaskButton.textContent = "Save";
    saveTaskButton.id = "saveTaskButton";

    const taskFormSections = document.createElement("section");
      taskContainer.appendChild(taskFormSections);
      taskFormSections.appendChild(dateLabel);
      taskFormSections.appendChild(saveTaskButton);

      return taskContainer;
},
  handleAddTaskFormSubmission() {
    console.log("testing");
    // const idSubmission = document.querySelector("#id-sumbission")
    const newsTaskSubmission = document.querySelector("#news-title-input").value;

    const newTaskPost = {
      title: newsTaskSubmission,
      timeStamp: new Date(),
      userId: null
    };

    console.log("testing", newTaskPost)

    // THESE SHOULD BE THE ACTION OF HANDLE ADD FORM, CREATE NEW FETCH
    const newTaskOuput = document.querySelector("#taskOutput")
    getAllTasks.postNewTask(newTaskPost)
      .then(clearElement(newTaskOutput))
      .then(tasks.getPostForPage);
  }
};
export default taskForm;