//Ejercicio 1
//Escribe una función llamada "addArrayProperty(obj, key, array)".Dado un objeto, una clave y un array, "addArrayProperty" establece una nueva propiedad sobre el objeto en la clave dada, con su valor establecido en el array dado.

function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
  return obj;
}
var myObj = {};
var myArray = [1, 3];
var myStr = 'myProperty';

var myObj = { myProperty: [1, 3] };

addArrayProperty(myObj, 'myProperty', myArray);

console.log(myObj);
console.log(myObj.myProperty);

//ejercicio 2
//Dado un objeto como parámetro, contar la cantidad de propiedades que este contiene y retornarlo.

  const objectPropertiesCounter = (obj) => {
      let newObj = Object.entries(obj); 
      return newObj.length;
    
    };
   const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });
    console.log(output); // -> 2

//ejercicio 3
//Escribe una función llamada "removeStringValuesLongerThan".Dado un número y un objeto,"removeStringValuesLongerThan" elimina cualquier propiedad en el objeto dado cuyos valores son cadenas de texto más largas que el número dado./


var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

function removeStringValuesLongerThan(num, obj) {
  
  for(var prop in obj){
    if(obj[prop].length > 6){
      delete obj[prop];
    }
  }
  return obj;
}

var output = removeStringValuesLongerThan(6, obj);
console.log(output);


