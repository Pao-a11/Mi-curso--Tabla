//Funcion de flecha
// setTimeout (()=>{
//     console.log('Hola Mundo');
// },1000);

// setTimeout(function(){
//     console.log('Hola Mundo');
// },100);

const getUsuarioByID =(id,callback)=>{
    const user ={
        id,
        nombe: 'Pepe'
    }
    setTimeout(()=>{
        callback(user);
    },1500);
}

getUsuarioByID(10,(usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombe.toUpperCase());
});