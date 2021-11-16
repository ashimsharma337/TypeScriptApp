import React, {useState} from 'react'

const Array = () => {
    const [ detail, setDetail ] = useState({
                                  name: 'johnny',
                                  address: 'korea',
                                  phone: '9297492729'
    })
    return (
        <div>
            <p>Name: {detail.name}</p>
            <p>Address: {detail.address}</p>
            <p>Phone: {detail.phone}</p>
        </div>
    )
}

export default Array
