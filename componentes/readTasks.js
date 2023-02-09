import { createTask } from "./addTask.js";

export const readTasks = () => {
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(taskList);

    taskList.forEach((task) => {
        console.log(createTask(task));
    });

};