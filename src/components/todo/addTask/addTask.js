import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Header from "./header";
import TaskForm from "./taskForm";
import styles from "../../../style/addTask.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
};

export default function AddTask({
  openAddTask,
  setOpenAddTask,
  handleOpenAddTask,
  handleCloseAddTask,
  headerTitle,
  task = [],
  action,
}) {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={openAddTask}
        onClose={handleCloseAddTask}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <main className={styles.taskForm}>
            <Header
              handleCloseAddTask={handleCloseAddTask}
              headerTitle={headerTitle}
            />
            <section className={styles.formContainer}>
              <TaskForm
                handleCloseAddTask={handleCloseAddTask}
                task={task}
                action={action}
              />
            </section>
          </main>
        </Box>
      </Modal>
    </div>
  );
}
