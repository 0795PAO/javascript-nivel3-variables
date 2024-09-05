function welcome(){
    //Escribe tu código aquí
    return "Hello World"
};

function evenOrOdd(n){
    //Escribe tu código aquí
    return n % 2 === 0 ? "even" : "odd"
};

function greeting(name) {
    //Escribe tu código aquí
    return `Hola, ${name}!`;
};

export { evenOrOdd, greeting, welcome }