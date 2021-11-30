import { createUseStyles } from "react-jss";
import Test from "./Test";
import { useState } from "react";


//Creating  function to use createuseStyle(react-jss)
const useStyles = createUseStyles({
    
    //creating object to add styles
    
     title: {color: "red", fontSize: "20px", fontWeight: "bold"},
    
    
     table: {borer: "2px solid black", width: "100%"},

     thead: {backgroundColor: "grey", textAlign: "center"},

     tbody: {backgroundColor: "skyblue"},

     tdata: {fontColor: "black", fontSize: "15px", fontWeight: "Bold"}
    
   
    })

interface IStudentsList {
    id: any;
    name: string;
    email: string;
    phone: string;
}

const StudentsList = () => {

    const classes = useStyles();

    const studentsList: IStudentsList[] = [
        { id: 1, name: "John", email: "jhn33@email.com", phone: "+448828282" }, 
        { id: 2, name: "Martha", email: "martha3434@email.com", phone: "+297393739" }, 
    ];

    const [data, setData] = useState(studentsList as IStudentsList[]);
    const [newData, setNewData] = useState({}   as IStudentsList);

    const handleChange = (event: any) => {
        console.log(event.target.name, event.target.value);
        setNewData({ ...newData, [event.target.name]: event.target.value });
      };

      const handleSave = () => {
        setData([...data, newData]);
        setNewData({id: "", name: "", phone: "", email: "" } as IStudentsList);
      };

    return (

      <>
        <h1 className = {classes.title}>Students List Page</h1>
        <div>
          <table className = {classes.table}>
              <thead className = {classes.thead}>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                  </tr>
              </thead>
              <tbody className = {classes.tbody}>
                
                    {
                        data.map((student) => (
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                            </tr>
                            
                        ))}
                 
              </tbody>
          </table>
          
              <h2>Add student detail to add a new student</h2>
              <input type = "text" name ="id" value =  {newData.id } placeholder="Enter ID" onChange = { handleChange  }></input>
              <input type ="text" name="name" value = { newData.name } placeholder="Enter Name" onChange = { handleChange }></input>
              <input type ="text" name="email" value = { newData.email } placeholder="Enter email" onChange = { handleChange }></input>
              <input type ="text" name="phone" value = { newData.phone } placeholder="Enter Phone Number" onChange = { handleChange }></input>
              <input type ="submit" name="submit" onClick = { handleSave }></input>
              
          
           
        </div>
        {/*use following component to see how title 1-2-2 helps in styling element with same classes(title)
        <Test/>*/}
       </>
    )
}

export default StudentsList;
