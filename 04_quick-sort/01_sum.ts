{
    function sum(arr: number[]) {
        let result: number = 0
        for (const num of arr) {
            result += num;
            console.log(num)
        }
        return result;
    }

    console.log(sum([1, 2, 3, 4]))
}