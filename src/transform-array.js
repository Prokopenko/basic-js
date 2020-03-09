module.exports = function transform(arr) {
    //throw 'Not implemented';
    // remove line with error and write your code here

    if(Array.isArray(arr))
    {
        var history = [];
        for(var i = 0; i < arr.length;i++)
        {
            if(arr[i] == '--discard-next') 
            if(arr[i] == '--discard-prev')
            if(arr[i] == '--double-next')
            if(arr[i] == '--double-prev')
        }

    }
    else 
        throw new Error();

};
