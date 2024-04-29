import { useContext, useEffect, useState} from 'react';

import { FirebaseContext } from '../../FirebaseProvider/FirebaseProvider';

const MyList = () => {
 
  const {user}=useContext(FirebaseContext)

  const [spot,setSpot]=useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/spots-by-email/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setSpot(data);
      });
  }, []);
  

  return (
    <div>
      <h1>{spot.length}</h1>
   
    </div>
  );
};

export default MyList;
