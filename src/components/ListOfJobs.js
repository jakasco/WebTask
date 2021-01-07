import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const ListOfJobs = () => {

const [dynamicElems, setDynamicElems] = useState([]);

 const myRef = React.createRef();

  const addJob = () => {

    const newDynamicModal = <div ref={myRef}>
         <li>
         <Link to="/jobview"><button>
         Job
            </button>
            </Link>
             </li>
    </div>;

    setDynamicElems(() => [...dynamicElems, newDynamicModal]);
  };

  return (
    <div >
       <div>Jobs:
            <ul>
            {dynamicElems}
            </ul>
            <button onClick={() => addJob()}>New Job</button>
        </div>
    </div>
  );
};

export default ListOfJobs;