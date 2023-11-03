//Capturo los botones
const btnComparar = document.querySelector("#btnComparar")
const btnCaballos = document.querySelector("#btnCaballos")

//Capturo el evento de click de los botones
btnComparar.addEventListener("click", compararCoches)
btnCaballos.addEventListener("click", cercarCaballos)

//Array con los datos de los coches
const carData = [
    {
        nombre: "Bugatti Chiron Super Sport 300+",
        potencia: 1500,
        motor: "8.0 litros W16",
        foto: "https://hips.hearstapps.com/hmg-prod/images/bugatti-chiron-super-sport-300-1-1568021423.jpg",
    },
    {
        nombre: "Koenigsegg Jesko",
        potencia: 1600,
        motor: "V8 de 5.0 litros",
        foto: "https://cdn.motor1.com/images/mgl/1Z49r7/s1/first-production-koenigsegg-jesko-pic.jpg",
    },
    {
        nombre: "Hennessey Venom F5",
        potencia: 1800,
        motor: "V8 de 6.6 litros",
        foto: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/08/14/hennessey-venom-f5-revolution-roadster-2023.jpeg",
    },
    {
        nombre: "Rimac C_Two",
        potencia: 1900,
        motor: "Eléctrico",
        foto: "https://img.remediosdigitales.com/aeddf5/rimac-c_two-2019/1366_2000.jpg",
    },
    {
        nombre: "Lamborghini Sian",
        potencia: 800,
        motor: "V12 híbrido",
        foto: "https://images1.autocasion.com/actualidad/wp-content/uploads/2019/09/Lamborghini-Sian-en-Frankfurt.jpg",
    },
];

//Función que capta y crea la hora actual de ejecución.
function horaActual(){

       // Obtiene la hora actual
       const fechaBusqueda = new Date()


       // Obtiene las horas, minutos y segundos
       const horas = fechaBusqueda.getHours().toString().padStart(2, '0');
       const minutos = fechaBusqueda.getMinutes().toString().padStart(2, '0');
       const segundos = fechaBusqueda.getSeconds().toString().padStart(2, '0');
   
       // Formatea la hora en formato "hh:mm:ss"
       const horaFormateada = `${horas}:${minutos}:${segundos}`;
   
       // Imprime la hora por consola y en la página
       console.log('La función se ejecutó a las ' + horaFormateada);
   
       //Muestra por pantalla la hora con el formato creado.
       const horaElement = document.getElementById('fechaActual');
       horaElement.textContent = 'La función se ejecutó a las ' + horaFormateada;      
   
}

//Declaro coches para iniciarlo
let coches =``
//Cada elemento de carData se mostrará lo siguiente.
carData.forEach(element => {
  coches += `
  
        <div class="col-md-4 mb-3">
            <div class="card border border-2 border-black">`

  coches += `<img src="${element.foto}" class="card-img-top border-2 border-black border" alt="Coche">
                <div class="card-body">
                    <h5 class="card-title">${element.nombre}</h5>
                    <p class="card-text">${element.potencia}+ caballos de fuerza"</p>
                    <p class="card-text">Motor: ${element.motor}</p>
                </div> 
            </div>
        </div>
  `

});

//Una vez haya hecho todos los elementos, se mostrará en #coches

document.querySelector('#coches').innerHTML = coches



//Función comparar
function compararCoches() {
    //Capturamos los values de los selectores 
    const cocheSeleccionado1 = document.querySelector("#selectCoches1").value
    const cocheSeleccionado2 = document.querySelector("#selectCoches2").value

    //Los mostramos por consola para asegurarnos que captamos bien lo que queremos
    console.log(cocheSeleccionado1)
    console.log(cocheSeleccionado2)

    
    let i;

    let tabla=``

    //Creamos un bucle que va contando uno más por cada coche, si no es el numero del array el seleccionado, seguirá el bucle hasta encontrarlo.
    for(i=0;i<=4;i++){
        //Si coincide el nombre con el value cocheSeleccionado1, hará lo siguiente
        if(cocheSeleccionado1 == carData[i].nombre){
            tabla+=`
            <tr class="border-bottom-1">
                <th class="border-1  w-25 text-center">Nombre</th>
                <th class="border-1  w-25 text-center">Potencia (HP)</th>
                <th class="border-1  w-25 text-center">Motor</th>
                <th class="border-1  w-25 text-center">Foto</th>
            </tr>`

            tabla+=`<tr class="border border-black">
            <td class="border-1  text-center">${carData[i].nombre}</td>
            <td class="border-1  text-center">${carData[i].potencia}+ caballos</td>
            <td class="border-1  text-center">${carData[i].motor}</td>
            <td class="border-1  text-center"><img class="w-50" src="${carData[i].foto}"></td>
            
            `
            //Acaba el bucle para no gastar más memoria
            i=6;

        }
    }

    //Mismo procedimiento de bucle para el segundo valor seleccionado, si lo encuentra hará los td.
    for(i=0;i<=4;i++){
        if(cocheSeleccionado2 == carData[i].nombre){
            tabla+=`<tr class="border border-black">
            <td class="border-1  text-center">${carData[i].nombre}</td>
            <td class="border-1  text-center">${carData[i].potencia}+ caballos</td>
            <td class="border-1  text-center">${carData[i].motor}</td>
            <td class="border-1  text-center"><img class="w-50" src="${carData[i].foto}"></td>
            
            `
            //Acaba el bucle.
            i=6;
        }
    }    
    //Ciera las filas
    tabla+=`</tr>`
    //Inserta por pantalla
    document.querySelector('#taulaComparativa').innerHTML=tabla;


  }


//Función para buscar por los caballos introducidos en el input
function cercarCaballos(){

    //Capturamos el valor introducido por el usuario en el input
    const inputCaball = document.querySelector("#inputCaballos").value

    //Iniciamos la lista
    let lista=``

    //Bucle para buscar cada elemento del array
    for(let i=0;i<=4;i++){
        //Si carData[i].potencia es mayor o igual al valor introducido, se mostrará en un li con el nombre del coche y su potencia.
        if(carData[i].potencia>=inputCaball){
            lista+=`<li>${carData[i].nombre} (${carData[i].potencia} caballos de potencia )</li>`
        }else{
            //Muestra todos los coches coincidentes según el input introducido.
            console.log("Coches coincidentes:", i)
        }
    }
    
    //Muestra por pantalla haciendo innerhtml en listaCaballos ( un ul con dicho id )
    document.querySelector("#listaCaballos").innerHTML=lista;

    //Llama a la función horaActual a la hora de apretar el botón de cercaCaballos, de esta manera sabremos en que momento se ha ejecutado dicha acción, se muestra por pantalla.
    horaActual()

  }