function check(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key)
        }
    }
}
const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
}
check(user)