import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Selector.scss';

const Selector = ({ selector, options }) => {
    return (

        <select
            className="form-control"
            value={selector}

        >
            <option value="">Choose</option>
            {
                options.map((option) => (
                    <option value={option}>{option}</option>


                ))
            }

            

        </select>

        /*  <Dropdown>
             <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light"
                 value={difficulty}
                 onChange={(event) => {
                     filterByDifficulty(
                         this.props.courses,
                         event.target.value
                     );
                 }}>
                 {selector}
             </Dropdown.Toggle>
 
             <Dropdown.Menu variant="light">
                 {
                     options.map((option) => (
                         <Dropdown.Item key={selector} value={option}>
                             {option}
                         </Dropdown.Item>
                     ))
                 }
 
 
             </Dropdown.Menu>
         </Dropdown> */

    );
};


export default Selector;