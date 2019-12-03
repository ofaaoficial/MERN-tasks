import axios from "axios";

export async function getTasks(){
    return await axios.get('http://localhost:4000/api/tasks');
}

export async function deleteTask(id){
    return await axios.delete(`http://localhost:4000/api/tasks/${id}`);
}

export async function getTaskById(id){
    return await axios.get(`http://localhost:4000/api/tasks/${id}`)
}

export async function updateTask(id, data){
    return await axios.put(`http://localhost:4000/api/tasks/${id}`, data);
}

export async function newTask(data){
    return await axios.post('http://localhost:4000/api/tasks', data);
}