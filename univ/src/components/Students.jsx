import React,{useEffect, useState} from "react";
import axios_client from "../config/host-app";
import { Table } from "react-bootstrap";

function Students(){
    const [listStudent,setListStudent]=useState([])
    const getAllStudents = async()=>{
        axios_client.get('/api/etudiant/etudiants')
        .then(
            (rep)=>{
                setListStudent(rep.data)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
    }
    useEffect(()=>{
        getAllStudents()
    },[]);


    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>nom</th>
                    <th>prenom</th>
                    <th>email</th>
                    <th>date Naissance</th>
                    <th>telephone</th>
                   
                </tr>
            </thead>
            <tbody>
            {listStudent.map((student,index) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.nom}</td>
                        <td>{student.prenom}</td>
                        <td>{student.email}</td>
                        <td>{student.dateNaissance}</td>
                        <td>{student.telephone}</td>

                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
export default Students;