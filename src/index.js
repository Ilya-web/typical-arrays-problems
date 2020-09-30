
exports.min = function min (array) {

    if(array && array.length > 0) {
        return Math.min.apply(Math, array);
    }
      return 0;

};

exports.max = function max (array) {

    if(array && array.length > 0) {
        return Math.max.apply(Math, array);
    }
    return 0;
};

exports.avg = function avg (array) {
    let result = 0;
    if(array && array.length > 0) {
        for(let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result / array.length;
    }

    return 0;

};
