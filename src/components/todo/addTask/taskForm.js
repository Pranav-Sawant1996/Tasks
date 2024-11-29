import React, { useState } from "react";
import styles from "../../../style/addTask.module.css";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext";
import moment from "moment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { fetchTask } from "../../apiCalls/apiCall";

export default function TaskForm({ handleCloseAddTask, task, action }) {
  const { userDetails, todo, setTodo } = useAuth();
  console.log("task", task);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      title: task?.task_title || "",
      description: task?.description || "",
      priority: task?.priority || "",
      date: task?.deadline
        ? moment(task.deadline, "ddd, DD MMM YYYY HH:mm:ss [GMT]").format(
            "YYYY-MM-DD"
          )
        : "",
      status: task?.status ? task?.status : "",
      estimated_time: task?.estimated_time ? task?.estimated_time : "",
      complexity: task?.complexity ? task?.complexity : "",
    },
  });
  const formValues = watch(); // This gives the current values of the form
console.log("Current Form Values:", formValues.complexity);
  const submit = async (data) => {
    const payload = {
      title: data.title,
      task_description: data.description,
      priority: data.priority,
      deadline: data.date,
      status: data.status ? data.status : "1", // pending - 1, in progress - 2, completed - 3
      user_id: userDetails.id,
      estimated_time: data.estimated_time,
      complexity: data.complexity,
    };

    let url = action === "addTask" ? "/add-task" : "/update-task";
    if (action === "editTask") {
      payload.id = task.id;
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log("Task submitted successfully!");
          fetchTask(userDetails, todo, setTodo);
          handleCloseAddTask();
        } else {
          console.log("Failed to submit task");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form className={styles.formSection} onSubmit={handleSubmit(submit)}>
      <div className={styles.inputGroup}>
        <label htmlFor="title" className={styles.label}>
          Title
        </label>
        <Controller
          control={control}
          name="title"
          rules={{
            required: { value: true, message: "This is required" },
          }}
          render={({ field: { onChange, value } }) => (
            <input
              onChange={onChange}
              value={value}
              type="text"
              id="title"
              className={styles.input}
            />
          )}
        />
        {errors.title && <p className="error">{errors.title.message}</p>}
      </div>
      <div className={styles.inputImageGrp}>
        <div className={styles.inputGroup}>
          <Controller
            control={control}
            name="date"
            rules={{
              required: { value: true, message: "This is required" },
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <label htmlFor="date" className={styles.label}>
                  Deadline
                </label>
                <div className={styles.dateInputWrapper}>
                  <input
                    // placeholder="Enter Firstname"
                    onChange={onChange}
                    value={value}
                    type="date"
                    id="date"
                    className={styles.input}
                  />
                </div>
              </>
            )}
          />
        </div>
        <div className={`${styles.inputGroup} ${styles.estimateInput}`}>
          <label htmlFor="estimated_time" className={styles.label}>
            Estimated Time (hrs)
          </label>
          <Controller
            control={control}
            name="estimated_time"
            rules={{
              required: { value: true, message: "This is required" },
            }}
            render={({ field: { onChange, value } }) => (
              <input
                onChange={onChange}
                value={value}
                type="text"
                id="estimated_time"
                className={styles.input}
              />
            )}
          />
          {errors.estimated_time && (
            <p className="error">{errors.estimated_time.message}</p>
          )}
        </div>
      </div>

      {action == "editTask" && (
        <div className={styles.inputGroup}>
          <Controller
            control={control}
            name="status"
            //   rules={{ required: "" }}
            render={({ field: { onChange, value } }) => (
              <FormControl sx={{}} size="small">
                <InputLabel id="demo-select-small-label">Status</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={value}
                  label="Status"
                  onChange={onChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Not Started</MenuItem>
                  <MenuItem value={2}>In Progress</MenuItem>
                  <MenuItem value={3}>Completed</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          {errors.status && <p className="error">{errors.status.message}</p>}
        </div>
      )}

      <fieldset className={styles.priorityFieldset}>
        <legend className={styles.label}>Priority</legend>
        <div className={styles.priorityOptions}>
          <Controller
            control={control}
            name="priority"
            rules={{
              required: { value: true, message: "This is required" },
            }}
            render={({ field: { onChange, value } }) => (
              <div className={styles.priorityOption}>
                <input
                  // placeholder="Enter Firstname"
                  onChange={onChange}
                  value="1"
                  checked={value === "1"}
                  type="radio"
                  id="priority"
                  className={styles.priorityInput}
                />
                <label className={styles.priorityLabel}>Extreme</label>
              </div>
            )}
          />
          <Controller
            control={control}
            name="priority"
            rules={{
              required: { value: true, message: "This is required" },
            }}
            render={({ field: { onChange, value } }) => (
              <div className={styles.priorityOption}>
                <input
                  // placeholder="Enter Firstname"
                  onChange={onChange}
                  value="2"
                  checked={value === "2"}
                  type="radio"
                  id="priority"
                  className={styles.priorityInput}
                />
                <label className={styles.priorityLabel}>Moderate</label>
              </div>
            )}
          />
          <Controller
            control={control}
            name="priority"
            rules={{
              required: { value: true, message: "This is required" },
            }}
            render={({ field: { onChange, value } }) => (
              <div className={styles.priorityOption}>
                <input
                  // placeholder="Enter Firstname"
                  onChange={onChange}
                  value="3"
                  checked={value === "3"}
                  type="radio"
                  id="priority"
                  className={styles.priorityInput}
                />
                <label className={styles.priorityLabel}>Low</label>
              </div>
            )}
          />
          {errors.priority && (
            <p className="error">{errors.priority.message}</p>
          )}
        </div>
      </fieldset>
      <fieldset className={styles.priorityFieldset}>
        <legend className={styles.label}>Complexity</legend>
        <div className={styles.priorityOptions}>
          <Controller
            control={control}
            name="complexity"
            rules={{
              required: { value: true, message: "This is required" },
            }}
            render={({ field: { onChange, value } }) => (
              <div className={styles.priorityOption}>
                <input
                  onChange={onChange}
                  checked={value == 3} // Check if the value is "3" for high complexity
                  type="radio"
                  id="complexityHigh"
                  className={styles.priorityInput}
                  value="3"
                />
                <label className={styles.priorityLabel}>High</label>
              </div>
            )}
          />
          <Controller
            control={control}
            name="complexity"
            rules={{
              required: { value: true, message: "This is required" },
            }}
            render={({ field: { onChange, value } }) => (
              <div className={styles.priorityOption}>
                <input
                  onChange={onChange}
                  checked={value == 2} // Check if the value is "2" for medium complexity
                  type="radio"
                  id="complexityMedium"
                  className={styles.priorityInput}
                  value="2"
                />
                <label className={styles.priorityLabel}>Medium</label>
              </div>
            )}
          />
          <Controller
            control={control}
            name="complexity"
            rules={{
              required: { value: true, message: "This is required" },
            }}
            render={({ field: { onChange, value } }) => (
              <div className={styles.priorityOption}>
                <input
                  onChange={onChange}
                  checked={value == 1} // Check if the value is "1" for low complexity
                  type="radio"
                  id="complexityLow"
                  className={styles.priorityInput}
                  value="1"
                />
                <label className={styles.priorityLabel}>Low</label>
              </div>
            )}
          />
          {errors.complexity && (
            <p className="error">{errors.complexity.message}</p>
          )}
        </div>
      </fieldset>
      <section className={styles.taskDescription}>
        <Controller
          control={control}
          name="description"
          // rules={{
          //     required: { value: true, message: "This is required" },
          // }}
          render={({ field: { onChange, value } }) => (
            <>
              <label htmlFor="description" className={styles.label}>
                Task Description
              </label>
              <textarea
                id="description"
                className={styles.descriptionInput}
                placeholder="Start writing here....."
                value={value}
                onChange={onChange}
              ></textarea>
            </>
          )}
        />
      </section>
      <button type="submit" className={styles.submitButton}>
        Done
      </button>
    </form>
  );
}
