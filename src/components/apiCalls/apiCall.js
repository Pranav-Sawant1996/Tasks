export const fetchTask = (userDetails, todo, setTodo) => {
  // console.log("user",userDetails)
  fetch("/get-task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails.id),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        setTodo(result.tasks);
        console.log("get task successful!", result);
      } else {
        console.log("get task failed!");
      }
    })
    .catch((error) => console.error("Error:", error));
};

export const deleteTask = (taskId) => {
  // console.log("user",userDetails)
  fetch("/delete-task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: taskId }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        // setTodo(result.tasks);
        console.log("get task successful!", result);
      } else {
        console.log("get task failed!", result.message);
      }
    })
    .catch((error) => console.error("Error:", error));
};

export const getOverdueTask = (user_id, setOverdueTask, setUpcomingTask) => {
  // console.log("user",userDetails)
  fetch("/overdue-task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: user_id }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        // setTodo(result.tasks);
        setOverdueTask(result.overdueTasks);
        setUpcomingTask(result.upcomimgTasks);
        // console.log("get overdue task successful!", result);
      } else {
        console.log("get overdue task failed!", result.message);
      }
    })
    .catch((error) => console.error("Error:", error));
};

export const filterTasks = (user_id, setTodo, priority, status) => {
  // console.log("user",userDetails)
  fetch("/filter-task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user_id,
      priority: priority,
      status: status,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        setTodo(result.filteredTasks);
        console.log("get filter successful!", result);
      } else {
        console.log("get filter failed!");
      }
    })
    .catch((error) => console.error("Error:", error));
};


export const analyseTaskDescription = (text, setTextAnalysis) => {
  // console.log("user",userDetails)
  fetch("/analyze-text", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text:text
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        setTextAnalysis(result.analysis);
        console.log("get analysis successful!", result);
      } else {
        console.log("get analysis failed!");
      }
    })
    .catch((error) => console.error("Error:", error));
};

export const getPriorityTasks = (user_id,setTasks) => {
  // console.log("user",userDetails)
  fetch("/prioritize-tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id:user_id
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        setTasks(result.prioritizedTasks);
        console.log("get priority task successful!", result);
      } else {
        console.log("get priority task failed!");
      }
    })
    .catch((error) => console.error("Error:", error));
};