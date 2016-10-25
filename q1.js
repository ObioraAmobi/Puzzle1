function rotateArray(array, steps) {
    if( steps < 0 || isNaN(steps) ) {
      throw new Error ("Please enter valid steps");
    }

    if( array.length == 0 ) {
      throw new Error ("Please enter valid array");
    }
    for ( var i = 0; i < steps; i++ ) {
        for ( var j = array.length - 1; j > 0; j-- ) {
            var temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
        }
    }
  console.log(array);
}