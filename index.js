/**
 * Барабаш Максим Сергеевич
 * @param {Number} a Первое слагаемое
 * @param {Number} b Второе слагаемое
 * @returns {Number}
 */
module.exports = function (a, b) {
    arr = new Array;
    arr = arguments;
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        var stringWithoutChar = parseInt(arr[i], 10);
        if (typeof arr[i] == 'number') {
            result += arr[i];
        }
        else {
            if ((typeof arr[i] == 'string') && (arr[i] == stringWithoutChar)) {
                result += Number(arr[i]);
            }
            else {
                result = NaN;
                break;
            }
        }
    }
    return result;
};
