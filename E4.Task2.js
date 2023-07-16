function check(obj, str) {
    console.log(str in obj)
    return
}

const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
}


check(user, "name")