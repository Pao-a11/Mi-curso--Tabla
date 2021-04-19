
const deadpoll = {
  nombre: 'Wade',
  apellido:'Winston',
  poder: 'Regenereacion',
  //edad: 50,
  getNombre:function () {
      return `${this.nombre} ${this.apellido} ${this.poder}`
  }
}
//console.log(deadpoll.getNombre());
// const nombre = deadpoll.nombre;
// const apellido = deadpoll.apellido;
// const poder = deadpoll.poder;

function imprimeHeroe({nombre,apellido, poder,edad=0}){
       //const{nombre,apellido, poder,edad=0}=heroe;
        console.log(nombre,apellido,poder,edad);
}
//imprimeHeroe(deadpoll);
// const {nombre, apellido, poder, edad=0}= deadpoll;
// console.log(nombre,apellido,poder,edad);
const heroes =['Deadpool','Superman','Batman'];
// const h1=heroes[0];
// const h2=heroes[1];
// const h3=heroes[2];
const [,,h3]=heroes
console.log(h3);