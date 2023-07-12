

export function howManyItemsInMenuArray(
    array: number[], 
    outerWidth: number, 
    initialWidth: number, 
    minimumNumberInNav: number
) {
    let total = initialWidth * 1.75;
    for (let i = 0; i < array.length; i++) {
        if (total + array[i] > outerWidth) {
            console.log(i);
            return i < minimumNumberInNav ? minimumNumberInNav : i - 1;
        } else {
            total = total + array[i];
        }
    }
}