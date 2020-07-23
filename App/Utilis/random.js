function* shuffle(array) {  //generator

    let i = array.length;

    while (i--) {
        yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0]; 
      
    }
 
}

export default shuffle;