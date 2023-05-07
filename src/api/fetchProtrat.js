export const fetchApi = async (path, method, body) => {
    let options = {};
    let url=`http://localhost:3000${path}`;
    console.log(url,method,body)
    try {
      if (method == "PUT" || method == "POST") {

        const data = { ...body };
        console.log(data);
        //siendo options una propiedad del fetch no sería necesario documentarlo
        options = {
          method,
            mode: 'cors',
          cache: 'force-cache',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
  
      } else if (method == "DELETE") options = { method };
  
      console.log(options)
      const request = await fetch(url, options);
      
      if (!request.ok) {
        throw new Error(`Error en la petición: ${request.status}`);
      }
      const response = await request.json();
      console.log(response);
  
      if (!response) {
        return {
          ok: false,
          msg: "No se ha obtenido una respuesta",
          // response,
        };
      }
      
      

      return response;
  
    } catch (e) {
      console.log(e)
      console.log("Error obteniendo data", e);
      return {
        ok: false,
        e,
      };
    }
  };

// export const consultation = async (url, method, body = {}) => {

//     let options = {};
  
//     const data = { ...body };
  
//     try {
  
//       if (method === "POST" || method === "PUT") {
        
//         options = {
//           method: method,
//           mode: 'cors',
//           cache: 'force-cache',
//           body: JSON.stringify(data),
//           headers: {
//             "Content-type": "application/json",
//           },
//         };
//       }
  
//       if (method === "DELETE") {
//         options = { method };
//       }
  
//       const request = await fetch(url, options);
  
//       if (request){
  
//         return request.json();
  
//       } else {
  
//         throw new Error('Error al conectar con la api');
        
//       }
  
//     } catch (error) {
//       throw new Error(`Error al conectar con la API: ${error.message}`);
//     }
//   };