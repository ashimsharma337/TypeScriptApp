import { createUseStyles } from "react-jss";
import Test from "./Test";
import { useState } from "react";

//Creating  function to use createuseStyle(react-jss)
const useStyles = createUseStyles(
    
    //creating object to add styles
    {
     title: {color: "red", fontSize: "20px", fontWeight: "bold"},
    }
    );

interface IStudentsList {
    name: string,
    email: string,
    phone: string
}

const StudentsList = () => {

    const classes = useStyles();

    const studentsList: IStudentsList[] = [
        { name: "John", email: "jhn33@email.com", phone: "+448828282" }, 
        { name: "Martha", email: "martha3434@email.com", phone: "+297393739" } 
    ];

    const [data, setData] = useState(studentsList);

    return (

      <>
        <h1 className = {classes.title}>Students List Page</h1>
        <div>
          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                  </tr>
              </thead>
              <tbody>
                
                    {
                        data.map((student: IStudentsList) => (
                            <tr>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                            </tr>
                            
                        ))}
                 
              </tbody>
          </table>
           
        </div>
        <Test/>
       </>
    )
}

export default StudentsList;
