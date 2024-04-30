import { useContext, useEffect, useState } from 'react';

import { FirebaseContext } from '../../FirebaseProvider/FirebaseProvider';
import ListTr from '../../components/ListTr/ListTr';

const MyList = () => {

  const { user } = useContext(FirebaseContext)

  const [spots, setSpots] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/spots-by-email/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setSpots(data);
      });
  }, []);

 



  return (
    <div>
      {
        spots.map(spot =><ListTr key={spot._id} spot={spot}></ListTr>)
      }


    </div>
  );
};

export default MyList;
