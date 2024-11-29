import "./App.css";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/registrationForm";
import LoginForm from "./components/loginForm";
import Dashboard from "./components/todo/dashboard";
import TaskList from "./components/todo/taskList";
import MyTask from "./components/todo/myTask/myTask";
import ProtectedRoutes from "./utils/protectedRoutes";
import AiTasks from "./components/todo/aiTasks/aiTasks";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<TaskList />} />
            <Route path="myTask" element={<MyTask />} />
            <Route path="aiRecomm" element={<AiTasks />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
