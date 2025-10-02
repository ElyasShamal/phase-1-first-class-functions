

const receivesAFunction = callback => callback();

function returnsANamedFunction(){
    return myFunction = function(){
          // named Function
    }
}

function returnsAnAnonymousFunction(){
    return function(){
     // Anonymous Function
    }
}