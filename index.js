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
       
       let a = fibonaci(n-1)
       
       seriesArray.push(a[a.length -1 ] + a[a.length -2])
       
       return seriesArray
        
    }
    
}

fibonaci(8)