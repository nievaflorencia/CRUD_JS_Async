//Abrir http (método,url)

// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE


//Promises
/*const listaClientes = () => {
  const promise = new Promise((resolve, reject) => { //function(resolve,reject)
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/perfil");

    http.send();

    http.onload = () => {
      const response = JSON.parse(http.response);
      if (http.status >= 400) {
        reject(response);
      } else {
        resolve(response);
      }
    };
  });
  return promise;
};*/


//FETCH API versión larga 
/*const listaClientes = () => {
  return fetch("http://localhost:3000/perfil").then((respuesta) =>{
    return respuesta.json();
  });
}*/

//FETCH API versión corta
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());


const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre,email, id: uuid.v4()})
  })
}


const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  })
}


const detalleCliente = (id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json())
}



const actualizarCliente = (nombre, email, id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email})

  })
  .then(respuesta => (respuesta))
  .catch((err) => console.log(err));
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};


