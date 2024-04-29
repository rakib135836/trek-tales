const getStoredSpots=()=>{
    const storedSpots=localStorage.getItem('Spots');
    if(storedSpots){
        return JSON.parse(storedSpots)
    }
    else{
   return []
    }

}



const addedSpots =_id =>{
const storedBook=getStoredSpots();
const exists=storedBook.find(bookID=> bookID===_id);
if(!exists){
 storedBook.push(_id)
localStorage.setItem('Spots', JSON.stringify(storedBook))
}

}

export{addedSpots,getStoredSpots}