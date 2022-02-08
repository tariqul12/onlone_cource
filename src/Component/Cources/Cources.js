import React from 'react';
import './Cources.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUserPlus } from '@fortawesome/free-solid-svg-icons'
const Cources = (props) => {
    // console.log(props);
const cource=props.cource;
// console.log(cource);
const name=cource.first_name+ " "+cource.last_name;
// console.log()
    return (
        <div 
        className='cource'>
            <div 
            className="images">
                <img src={cource.img} alt="" />
            </div>
            <div 
            className='descriptation'>
                <h4>{cource.title}</h4>
                <p className='name'>{name}</p>
                <p className='email'>{cource.email}</p>
                <p className='salary'>Salary/month : ${cource.salary}</p>
                <p className='gender'>Gender: {cource.gender}</p>
                <button 
                 onClick={()=>props.handelClick(cource)}
                className='btn success'>
                    <FontAwesomeIcon 
                    
                    className='icon'
                    icon={faUserPlus} />
                     Add Salary</button>
            </div>

            
        </div>
    );
};

export default Cources;