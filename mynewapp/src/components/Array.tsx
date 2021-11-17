import React, {useState} from 'react'

 interface employeeDetails {
    name: string,
    address?: string,
    phone: string,
    //address is optional, so ? added before :
    
}

//creating an array with interface
let employees: employeeDetails[] =  [{
    name: 'Alex',
    address: 'usa',
    phone: '9979797'
},
{
    name: 'Bob',
    address: 'korea',
    phone: '8383836878'
}, 
{
    name: 'Charlie',
    address: 'japan',
    phone: '8938989298289'
}];


const Array = () => {
    const [ detail, setDetail ] = useState({
                                  name: "ABC",
                                  address: "kathmandu",
                                  phone:  "47474474",
                                  } as employeeDetails);
    
    const handleDetailChange = () => {
                                setDetail({
                                name: "XYZ",
                                //There is no error eventhough we miss address because it is optional we added
                                //? before :
                                //e.g adress?: "string"
                                phone: "979792929",
                                
                            });
                           }
                                    
    return (
        <div>
            <p>--------------------------------------</p>
            <h1>Employee Details</h1>
            <p>Name: {detail.name}</p>
            <p>Address: {detail.address}</p>
            <p>Phone: {detail.phone}</p><br/>
            <button onClick = { handleDetailChange }>Change Detail</button>

        </div>
    )
}

export  { Array, employees };


