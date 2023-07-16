function nullProto(){
    obj = Object.create(null)
    return obj
}
res = nullProto()
console.log(res)