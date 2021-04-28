function receivesAFunction(cb){
    return cb()
}


function Monday() {
    runFiveMiles();
    liftWeights();
  } 

receivesANamedFunction(exerciseRoutine);{
    return exerciseRoutine()
}
receivesANamedFunction(Monday)

receivesANamedFunction(function beforeAll(){"hello world"})

// returnsAnAnonymousFunction(cb)
//     return(cb)

// returnsAnAnonymousFunction(const a, a => a+a)