//Determinamos hora actual del sistema para emitir el saludo correcto
const today = new Date()
const curHr = today.getHours()

if (curHr >= 6 && curHr < 13) {
    alert('Buenos Días, Bienvenidos a Dark Kitchen!')
} else if (curHr >= 13 && curHr < 21) {
    alert('Buenas Tardes, Bienvenidos a Dark Kitchen!')
} else if (curHr >= 21 && curHr < 6) {
    alert('Buenas Noches, Bienvenidos a Dark Kitchen!')
}

//CLASE A SER UTILIZADA PARA LA CONSTRUCCIÓN DE PRODUCTOS

class Producto {
    constructor(categoria, nombre, precio, disponible) {
        this.categoria = categoria
        this.nombre = nombre
        this.precio = precio
        this.disponible = disponible
    }

}

//CREACIÓN DE LOS PRODUCTOS DE LA TIENDA
const producto1 = new Producto('hamburguesa', 'Combo Hamburguesa', 2200, 10)
const producto2 = new Producto('bebidas', 'aguas', 200, 5)
const producto3 = new Producto('helados', 'KitKat', 900, 20)
console.log(producto1)
console.log(producto2)
console.log(producto3)

//FUNCIÓN PAGAR
function pagar(){
    const medioDePago = prompt('Elige el medio de pago de tu preferencia: Tipea L para pago en el local ó T para pago en línea con tarjeta de débito o crédito').toLowerCase()
    if (medioDePago ==='t'){
        alert('a continuación serás re-dirigido a nuestro portal de pago')
        console.log('el cliente ha pagado en línea. Preparar pedido para envío a domcilio')
    } else if (medioDePago ==='l'){
        const horaDeRetiro =parseInt(prompt('indícanos la hora de retiro, para tener lista tu orden en formato militar'))
        console.log('el cliente ha elegido retirar en el local a las '+horaDeRetiro)
        if (horaDeRetiro>curHr && horaDeRetiro<=22){
            alert ('tu orden ha sido agendada para ser retirada a las '+horaDeRetiro+ ' horas')
        }  else {
            alert('Ingresa una hora válida. Recuerda, nuestro horario laboral es de 9-22 hrs')
        }
    } else {
        alert('indica un medio de pago válido')
    }
}


//PROCESO DE COMPRA

    const producto = prompt('qué producto deseas adquirir').toLocaleLowerCase()

    //COMPRA DE 1 PRODUCTO BASADA EN CONDICIONALES
    
    if (producto === 'hamburguesa') {
        //requerimiento del cliente
        const qHamburguesa = parseInt(prompt('Cuántas ' + producto1.nombre + ' deseas adquirir?'))
        //si no hay disponible
        if (producto1.disponible < qHamburguesa) {
            alert('No Disponible. Por favor selecciona una cantidad menor')
        } else {
            //si hay disponible?
            if (qHamburguesa >= 1 && qHamburguesa <= producto1.disponible) {
                console.log('la orden consta de ' +qHamburguesa, producto1.nombre)
                //confirma la cantidad de producto solicitado
                alert('Has agregado a tu orden la cantidad de ' + qHamburguesa + ' ' + producto1.nombre)
                // calcula el precio para esa cantidad de producto
                aPagar = qHamburguesa * (parseInt(producto1.precio))
                // indica al usuario el costo de su orden
                alert ('Tu orden de '+qHamburguesa+' '+producto1.nombre+ ' tiene un valor de $'+aPagar)
                // función de pago o retiro en local
                pagar()      
            } else {
                alert('no indicaste una cantidad de ' + producto1.nombre)
            }
    
        }
    } else if (producto === 'bebidas') {
        const qBebidas = parseInt(prompt('Cuántas ' + producto2.nombre + ' deseas adquirir?'))
        if (producto2.disponible < qBebidas) {
            alert('No Disponible. Por favor selecciona una cantidad menor')
        } else {
            if (qBebidas >= 1 && qBebidas <= producto2.disponible) {
                console.log('la orden consta de ' +qBebidas, producto2.nombre)
                alert('Has agregado a tu orden la cantidad de ' + qBebidas + ' ' + producto2.nombre)
                aPagar = qBebidas * (parseInt(producto2.precio))
                alert ('Tu orden de '+qBebidas+' '+producto2.nombre+ ' tiene un valor de $'+aPagar)
                pagar()
            } else {
                alert('no indicaste una cantidad de ' + producto2.nombre)
            }
        }
    } else if (producto === 'helados') {
        const qHelados = parseInt(prompt('Cuántas ' + producto3.nombre + ' deseas adquirir?'))
        if (producto3.disponible < qHelados) {
            alert('No Disponible. Por favor selecciona una cantidad menor')
        } else {
            if (qHelados >= 1 && qHelados <= producto3.disponible) {
                console.log('la orden consta de ' +qHelados, producto3.nombre)
                alert('Has agregado a tu orden la cantidad de ' + qHelados + ' ' + producto3.nombre)
                aPagar = qHelados * (parseInt(producto3.precio))
                alert ('Tu orden de '+qHelados+' '+producto3.nombre+ ' tiene un valor de $'+aPagar)
                pagar()
                
            } else {
                alert('no indicaste una cantidad de ' + producto3.nombre)
            }
        }
    } else {
        alert('Elige un Producto válido')
    }