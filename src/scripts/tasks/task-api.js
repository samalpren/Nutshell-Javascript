let taskApi = {
  getAllTasks() {
      return fetch("http://localhost:8088/tasks").then(response =>
      response.json()
      );
  },

  postTasks(newTaskPost) {
      return fetch ("http://localhost:8088/tasks", {
       method: "POST",
       headers: {
          "content-type": "application/json"
       },
       body: JSON.stringify(newTaskPost)
      })
  }
};

export default taskApi;