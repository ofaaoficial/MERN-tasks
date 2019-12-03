import axios from "axios";

export async function getUsers() {
    return await axios.get('http://localhost:4000/api/users');
}

export async function deleteUser(id){
    return await axios.delete(`http://localhost:4000/api/users/${id}`)
}

export async function newUser(data){
    return await axios.post('http://localhost:4000/api/users', data);
}