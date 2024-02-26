/*const rent = (array) => { 
fetch ('https://reqres.in/api/users.')
.then(response => response.json())
.then(data => {
    console.log(data)
})
}
rent()*/

/*const revell = (array) => {
    fetch ('https://this-site-doesnt-exists.web')
    .then(response => response.json())
    .then(data =>{console.log(data)})
    .catch(err => console.log('no working'))
}
revell()*/

/*const rane = (array) => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => {console.log(typeof data)})
}
rane()*/


/*const renen = (array) => {
    fetch ('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => {console.log(data.data.length)})
}
renen()*/

/*const right = (array) => {
    fetch('https://reqres.in/api/users/1')
    .then(res => res.json())
    .then(data => {console.log(data.data.email)})
}
right()*/

/*const URL = 'https://reqres.in/api/users'

const user = {
    "first_name": "baysarov.web"
}

fetch(URL,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
})
.then(res => res.json())
.then(data => console.log(data))*/

/*const URL = 'https://reqres.in/api/users'

const user = {
    name: "baysarov",
    surname: "web",

}

fetch(URL,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
})
.then(res => res.json())
.then(data => console.log(`${data.id} ${data.createdAt}`))*/

//const URL = 'https://reqres.in/api/users/5'


/*fetch(URL,{
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json'},
})
.then(res => res.status == 204 ? console.log("пользователь с id 5 успешно удален") : 'ошибка')*/


const URL = 'https://reqres.in/api/users/3'

const user = {
    name: "John Sina",
    
}

fetch(URL,{
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
})
.then(res => res.json())
.then(data => console.log(data.name))
