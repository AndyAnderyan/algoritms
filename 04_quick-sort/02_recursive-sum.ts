{
    // @ts-ignore
    function sum(arr: number[]) {
        if (arr.length === 0 || arr.length === 1) {
            return arr[0] ?? 0;
        } else {
            return arr[0] + sum(arr.slice(1))
        }
    }

    console.log(sum([1, 2, 3, 4]));
}