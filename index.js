//let add= (a,c)=>(a+c)

function receivesAFunction(x) {
  return x()
}

function person() {
}

function returnsANamedFunction() {
  return person
}


function returnsAnAnonymousFunction() {
  return function(){}
}