console.log("funcionando")

const form = document.querySelector('#form') 

console.log(form)

form.addEventListener('submit',send=>{
    send.preventDefault() //Prevengo el evento por defecto
    const form = event.target

    const data  ={ //Guardo los datos de mis inputs
        nombre : form.name.value,
        message: form.message.value
    }

    const url = `https://wa.me/1165491266?text=¡Hola , ${data.message}.+Mi nombre es ${data.nombre}.`;

    window.open(url, "_blank");
 
    console.log(form)    
});


