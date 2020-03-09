module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    //throw 'Not implemented';
    // remove line with error and write your code here
    var steps = Math.pow(2,disksNumber) - 1; //steps for this algorithm are (2^n - 1), where n is number of circles
    var time = steps / (turnsSpeed/ 3600); //we have speed per hour? but we should send result as seconds

    var k = {
        turns: steps,
        seconds: time
    }

    return k;
}