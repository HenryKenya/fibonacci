const fibonaci = (n) => {
    let seriesArray = [] // array to hold series
    
    // if number is one
    if(n == 1) {
        seriesArray = [0,1]
        
        return seriesArray
    } 
    // number is less than one
    else if(n < 1) {
        console.log(n)
        seriesArray  = [0]
        
        return seriesArray
    } 
    // here use the limit of the value n
    else {
       
       let seriesArray = fibonaci(n-1)
       
       seriesArray.push(seriesArray[seriesArray.length -1 ] + seriesArray[seriesArray.length -2])
    
       return seriesArray
        
    }
    
}

fibonaci(8)