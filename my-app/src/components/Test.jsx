const Test = function() { 
    function sum(a, b, ...rest) {
        return a + b + rest.reduce((total, numbers) => total + numbers, 0);
    }

    const numbers = [1, 2, 3, 4, 5];
    console.log(sum(...numbers));

    console.log(Math.max(...numbers));
}

export default Test;