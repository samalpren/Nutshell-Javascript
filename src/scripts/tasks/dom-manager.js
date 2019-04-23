import taskForm from "./task-event-handlers";
import taskApi from "./task-api";

const header = document.createElement("h1")
const taskContainer = document.querySelector("#tasks-section");
taskContainer.appendChild(header);
header.textContent = "TASKS"

const tasks = {
  taskPost() {
    const newTaskButton = document.createElement("button");
    newTaskButton.textContent = "New Post";
    taskContainer.appendChild(newTaskButton);

    newTaskButton.addEventListener("click", () => {
      taskForm.buildTaskForm()
      document.querySelector("#saveTaskButton").addEventListener("click", taskForm.handleAddTaskFormSubmission);
    })
    // CREATE SECTION FOR TASK INPUT FORM
    const taskInputForm = document.createElement("section");
    taskInputForm.id = "taskInputForm";
    taskContainer.appendChild(taskInputForm);

    // CREATE SECTION FOR TASKS AND APPEND TO DOM
    const newTaskOutput = document.createElement("section");
    newTaskOutput.id = "newTaskOutput";
    taskContainer.appendChild(newTaskOutput);
  },
  // CHANGE THE NAME FOR ONLY EXISTING ARTICLES
  getPostForPage() {
    taskApi.getAllTasks()
    .then(task => {

        const taskContainer = document.querySelector("#newTaskOutput");

        //  CREATING TASK ELEMENT POST TO PUT TO DOM

        task.forEach(task => {
         const taskSection = document.createElement("section");
         const title = document.createElement("h1");
         const time = document.createElement("p");
         time.textContent = new Date();
         const newEditButton = document.createElement("button")
         const deleteButton = document.createElement("button")

         title.textContent = task.title;
         newEditButton.textContent = "Edit";
         newEditButton.id = "editButton"
         deleteButton.textContent = "Delete";
         deleteButton.id = "deleteButton";

         taskContainer.appendChild(taskSection);
         taskSection.appendChild(title);
         taskSection.appendChild(time);
         taskContainer.appendChild(newEditButton);
         taskContainer.appendChild(deleteButton);
        })
       })
      }
    };

    export default tasks;