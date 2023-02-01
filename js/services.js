const servicios = [
    {   id:'src-1',
        img:'./public/img/aire.png',
        tipo:'Aire Acondicionado',
        descripcion:'Realizamos reparaciones </br> e instalaciones'
    },
    {   id:'src-2',
        img:'./public/img/heladera.png',
        tipo:'Heladeras',
        descripcion:'Realizamos reparaciones de </br> Heladera domiciliarias y comerciales'
    },
    {   id:'src-3',
        img:'./public/img/lavarropa.png',
        tipo:'Lavarropas',
        descripcion:'Realizamos reparaciones </br>  de Lavarropas'
    }
]

//Creo mis cartas 

console.log('funciona')

//Creo una funcion
function crearCard(){
    //Capturo a mi elemento section con el id #servicios
    const contenedor = document.querySelector('#servicios');
    
    //Recorro el arreglo de objetos
    servicios.forEach(servicio=>{
        //Creo un elemento html 
        const crearArticulo = document.createElement('article')
        //Le asigno una clase
        crearArticulo.className = 'src-info';
        console.log(crearArticulo)
        //Inserto contenido dentro de este
        crearArticulo.innerHTML= 
        `
        <img src=${servicio.img} alt= ${servicio.img}>
        <h2>${servicio.tipo}</h2>
        <p>${servicio.descripcion}</p>
        `
        //Envio al elemento nuevo a mi html 
        contenedor.append(crearArticulo)

    })
}

crearCard()



