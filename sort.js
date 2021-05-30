const sortNumbers = num => {
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (num[j] > num[j + 1]) {
                temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
            }
        }
    }
    return num;
}

numbers = [8, 3, 5, 4, 2, 1];

console.log(sortNumbers(numbers));
// Logs [ 1, 2, 3, 4, 5, 8 ]