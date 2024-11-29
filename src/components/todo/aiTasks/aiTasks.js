import React, { useEffect, useState } from "react";
import AiTaskList from "./aiTaskList";
import { useAuth } from "../../../context/authContext";
import { getPriorityTasks } from "../../apiCalls/apiCall";

export default function AiTasks() {
    const { userDetails, todo, setTodo } = useAuth();
    const [tasks,setTasks]=useState([])
    useEffect(()=>{
        getPriorityTasks(userDetails.id,setTasks)
    },[])
  return (
    <>
      <AiTaskList tasks={tasks} />
    </>
  );
}
