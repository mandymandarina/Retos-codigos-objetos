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

//ejercicio 4
//Escriba una función llamada getElementOfArrayProperty.Dado un objeto, una clave y un índice numérico, getElementOfArrayProperty devuelve el valor del elemento en el índice dado del arreglo localizado dentro del objeto dado en la clave dada.Notas:Si el arreglo está vacío, debería devolver undefined.Si el índice dado está fuera de rango del arreglo ubicado en la clave dada, debería devolver undefined.Si la propiedad en la clave dada no es un arreglo, debería devolver undefined.Si no hay ninguna propiedad en la clave, debería devolverse undefined.

var obj = {
  key: ['Jamil', 'Albrey']
 };

function getElementOfArrayProperty(obj, key, index) {
 
  return obj[key] [index];
}

var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output);

//ejercicio 5
//Escribe una función llamada greetCustomer.Dando un nombre, greetCustomer devuelve un saludo basado en cuántas veces ese cliente ha visitado el restaurante. Consulte el objeto customerData.El saludo debe ser diferente, dependiendo del nombre de la reservación.
const customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

function greetCustomer(firstName) {
  var greeting = '';  
  if (customerData[firstName] === 0){
    greeting ='Welcome! Is this your first time?';
  } else if(customerData[firstName].visits === 1){
    greeting ="Welcome back, Joe! We're glad you liked us the first time!";
  }else if (customerData[firstName].visits >1){
    greeting ='Welcome back, Carol! So glad to see you again!';
  }
  return greeting;
}

var output = greetCustomer('Carol');
console.log(output);

//ejercicio 6
  
