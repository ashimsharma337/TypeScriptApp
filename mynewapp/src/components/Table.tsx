import "../App.css";
import { employees } from './Array';


const Table = () => {
      return (
        <div className = "app-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                   <tr>
                    <td>{employee.name}</td>
                    <td>{employee.address}</td>
                    <td>{employee.phone}</td>
                   </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
      )
}

export default Table
