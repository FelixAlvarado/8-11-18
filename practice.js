
//sorting number 0 to 2 at O(n) time complexity using counting sort
function sort_colors(colors) {
    let count = {};
    count[0] = 0;
    count[1] = 0;
    count[2] = 0;
    for (let i = 0; i < colors.length; i++){
        console.log(colors[i]);
            count[colors[i]] += 1;
        console.log(count);
    }
    let countArr = [count[0], count[0] + count[1],count[0] + count[1] + count[2]];
    let result = new Array(colors.length);
    for (let j = 0; j < result.length; j++){
        if (j < countArr[0]){
            result[j] = 0;
        } else if (j >= countArr[0] && j < countArr[1]) {
            result[j] = 1;
        }else {
            result[j] = 2;
        }
    }
    return result;
}
