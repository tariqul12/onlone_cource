import React, { useState } from 'react';
import './Home.css';

import fakeData from './../../creatByMe.json';
import Cources from '../Cources/Cources';
import Salary from '../Salary/Salary';
const Home = () => {
    const [cources,setCources]= useState(fakeData);
    const [salary,setSalary] = useState([]);
    cources.sort(()=>0.5-Math.random())
    console.log(cources);
    const handelClick=(props)=>{
        console.log("button click",props);
        const newSalary=[...salary,props];
        setSalary(newSalary);
    }

    return (
        <div className='home container'>
            <div className='course'>
            {
                cources.map(cource=>
                <div 
                    className='container'
                    ><Cources
                    handelClick={handelClick}
                    cource={cource}
                    ></Cources>
                    </div>)
            }
            </div>
            <div className='salary_count'>
                
                <Salary salary={salary} />
                
            </div>
           
            
           

        </div>
    );
};

export default Home;