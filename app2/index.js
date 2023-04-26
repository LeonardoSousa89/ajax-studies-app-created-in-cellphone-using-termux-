//https://www.npmjs.com/package/node-fetch
const fetch=require('node-fetch')
const { localStorage, _token }=require('./localStorage')

async function signUp(){
  
  const url='http://127.0.0.1:34568/signup'
  
  var response
  var r
  
   const data={
    name: 'Test Jonhson',
    email: 'test@gmail.com',
    password: '1234',
    role: 'user'
  }
  
  try{
    
    response=await fetch(url, {
                 method: 'POST',
                 body: JSON.stringify(data),
	               headers: {
	                 'Content-Type': 'application/json'
	               }
              })
   r=await response.json()
  }catch(e){
    
    console.log(e)
  }
    
  console.log(r)
}



async function login(){
  
  const url='http://127.0.0.1:34568/login'
  
  const data={
    email:"akitaonrails@gmail.com",
    password:"12345678"
  }
  
  var response
  var r
  
  try{
    
    response=await fetch(url, {
                 method: 'POST',
                 body: JSON.stringify(data),
	               headers: {
	                 'Content-Type': 'application/json'
	               }
              })
   r=await response.json()
  }catch(e){
    
    console.log(e)
  }
    
  console.log(r)
}



async function getMail(){
  
  const url='http://127.0.0.1:34568/user/21?page=1&size=10'
  
  var response
  var r
  //pode ser obtido do método de login e armazenado em um cookie, sessionStorage ou localStorage
  var token=localStorage.getItem(_token)
  
  try{
    
    response=await fetch(url, {
                 method: 'GET',
	               headers: {
	                 'Content-Type': 'application/json',
	                   'Authorization': `Bearer ${ token }`
	               }
              })
   r=await response.json()
  }catch(e){
    
    console.log(e)
  }
    
  console.log(r)
}



async function sendMail(){
  
  const url='http://127.0.0.1:34568/user/21'
  
  const data={
    mail_destination: "mendesdev89@gmail.com",
    topic:":USO DE OUTRA DEPENDENCY",
    mail_msg:"Mano boa tarde, podemos utilizar o crypto em função dos problemas apresentados com o bcrypt? no aguardo!",
    client_id:21
  }
  
  var response
  var r
  //pode ser obtido do método de login e armazenado em um cookie, sessionStorage ou localStorage
  var token=localStorage.getItem(_token)
  
  try{
    
    response=await fetch(url, {
                 method: 'POST',
                 body: JSON.stringify(data),
	               headers: {
	                 'Content-Type': 'application/json',
	                   'Authorization': `Bearer ${ token }`
	               }
              })
   r=await response.json()
  }catch(e){
    
    console.log(e)
  }
    
  console.log(r)
}



async function signOut(){
  
  const url='http://127.0.0.1:34568/signout'
  
  var response
  var r

  try{
    
    response=await fetch(url, {
                 method: 'POST'
              })
   r=await response.json()
  }catch(e){
    
    console.log(e)
  }
    
  console.log(r)
}

/*https://pt.stackoverflow.com/questions/432626/problema-com-promisse-retorna-promise-pending*/


//console.log(signUp())
//console.log(login())
//console.log(getMail())
//console.log(sendMail())
//console.log(signOut())