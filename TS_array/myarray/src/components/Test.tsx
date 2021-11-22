import React from 'react';
import { createUseStyles } from 'react-jss';



const useStyles = createUseStyles(
     {
        title: {color: "blue", fontSize: "20px", fontWeight: "bold"},
      }
);

const Test = () => {
    const classes = useStyles()
    return (
        <div>
          <h3 className = {classes.title}>Test Page</h3>  
        </div>
    );
};

export default Test
