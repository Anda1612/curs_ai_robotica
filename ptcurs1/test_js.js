function factorial (n) {
    if (n < 0) {
        throw new Error("Negative numbers do not have a factorial.");
    }   
    if (n === 0 || n === 1) {
        return 1;
    }   
    return n * factorial(n - 1);
}

//functie care verfica daca un numar este par
function isEven (n) {
    return n % 2 === 0;
}