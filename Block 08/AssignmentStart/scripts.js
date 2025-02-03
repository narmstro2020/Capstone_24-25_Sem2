class ValidationError extends Error{
    constructor(message){
        super(message)
        //TODO: assign the name for this object to "ValidationError"
    }
}

//TODO: make a function called validateUsername with an input parameter of username
//TODO:  This function will throw a new ValidationError is the user name is less that 10 character long
//TODO:  use the .length to find the length of a string
//TODO: if the name is of the correct length return "Username is Valid"

try{
    console.log(validateUsername("abc"));
}catch(error){
    console.error(`${error.name}: ${error.message}`)
}