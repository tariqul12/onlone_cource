import React from 'react';
import './Salary.css'
const Salary = (props) => {
    const salary=props.salary;
    console.log(salary);
    let parSalary=0;
    for(let i=0;i<salary.length;i++){
        const sal=salary[i];
        parSalary=parSalary+Number(sal.salary);
        console.log(parSalary);
    }
    return (
        <div className='salary'>
                <p>Count people : {salary.length} </p>
                <p>Total salary : {parSalary.toFixed(2)}</p>

        </div>
    );
};

export default Salary;