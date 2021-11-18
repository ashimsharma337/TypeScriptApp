import { createUseStyles } from "react-jss";

//Creating  function to use createuseStyle(react-jss)
const useStyles = createUseStyles({
     title: {color: "red"},
});



const StudentsList = () => {

    const classes = useStyles();

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
                  <tr>
                      <td>Peter Russel</td>
                      <td>peter123@email.com</td>
                      <td>+7533388733</td>
                  </tr>
                  <tr>
                      <td>John Russel</td>
                      <td>john23@email.com</td>
                      <td>+38373ss834</td>
                  </tr>
              </tbody>
          </table>
           
        </div>

       </>
    )
}

export default StudentsList;
