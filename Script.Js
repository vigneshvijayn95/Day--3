var TODORequest = new XMLHttpRequest();
TODORequest.open("GET", "https://jsonplaceholder.typicode.com/todos/");

TODORequest.addEventListener('load', function () {

console.log(this.response)
iterate(JSON.parse(this.response))
})

TODORequest.send()
console.log(TODORequest)

function iterate(data = []){

for (var x = 0; x < data.length; x++){

console.log(data[x].title)
}
}
