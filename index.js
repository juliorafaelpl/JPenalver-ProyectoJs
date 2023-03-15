//ecommerce

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

//CLASE PRODUCTOS

class Producto {
    constructor(categoria, nombre, precio, existencia) {
        this.categoria = categoria
        this.nombre = nombre
        this.precio = precio
        this.existencia = existencia
    }
}
// creamos  productos
const hamburguesa = new Producto('hamburguesa', 'American Burger', 2100, 20)
const bebida = new Producto('bebida', 'Agua Aquarius 500ml', 380, 20)
const helado = new Producto('helado', '1/4 de Helado KitKat Ice Cream', 700, 10)


// ARRAY  (LISTA DE PRODUCTOS)
const productos = [hamburguesa, bebida, helado]
console.log(productos)

//FUNCIÓN PAGAR
function pagar() {
    const medioDePago = prompt('Elige el medio de pago de tu preferencia: Tipea L para pago en el local ó T para pago en línea con tarjeta de débito o crédito').toLowerCase()
    //si el cliente pagase con medios electrónicos
    if (medioDePago === 't') {
        if (curHr >9 && curHr < 22) {
            alert('a continuación serás re-dirigido a nuestro portal de pago')
        console.log('el cliente ha pagado en línea. Preparar pedido para envío a domcilio')
        alert('GRACIAS POR PREFERIR EN DARK KITCHEN')
        } else {
            alert('En estos momentos, no podemos procesar tu orden. Recuerda que nuestro horario laboral es de 9-22hrs')
        }
      // si el cliente programa para retirar en el local  
    } else if (medioDePago === 'l') {
        const horaDeRetiro = parseInt(prompt('indícanos la hora de retiro, para tener lista tu orden en formato militar'))
        if (horaDeRetiro > curHr && horaDeRetiro <= 22) {
            alert('tu orden ha sido agendada para ser retirada a las ' + horaDeRetiro + ' horas')
            console.log('el cliente ha elegido retirar en el local a las ' + horaDeRetiro)
            alert('GRACIAS POR PREFERIR EN DARK KITCHEN')
        } else {
            alert('En estos momentos, no podemos procesar tu orden. Recuerda que nuestro horario laboral es de 9-22hrs')
        }

        // no indica un medio válido de pago
    } else {
        alert('indica un medio de pago válido')
    }
}


//PROCESO DE COMPRA

//creación de carrito de compras
const carrito = []

//elección de producto por parte del usuario
let productoEscogido = prompt(
    'Escoge el producto que deseas comprar: hamburguesa-bebida-helado'
).toLowerCase()
// variable para condicion del ciclo
let seguirComprando = true

//ciclo de compra
while (seguirComprando === true) {
    // buscar el producto escogido
    const producto = productos.find(
        (producto) => producto.categoria === productoEscogido
    )
    // guardar producto en carrito o preguntarle al usuario un producto existente
    if (producto) {
        //determinación de existencia del producto seleccionado
        const disponible = producto.existencia
        //se puede atender la cantidad solciitada del producto?
        const cantidadReq = (parseInt(prompt('Indica la cantidad que deseas comprar')))
        if ((cantidadReq) > (disponible)) {
            alert('elige una cantidad menor de producto')
        } else {
            alert('Has agregado la cantidad de ' + cantidadReq + ' de' + ' ' + producto.nombre)
        }
        producto.requerido = cantidadReq
        //sumar al carrito el producto seleccionado, chequeada su disponibilidad en inventario
        carrito.push(producto)
    } else {
        productoEscogido = prompt(
            'Escoge un producto correcto: hamburguesa-bebida-helado'
        )
        continue
    }
    //opción agregar otro item a su orden
    const decision = prompt('Deseas seguir comprando? si-no')
    if (decision === 'si') {
        productoEscogido = prompt(
            'Escoge el producto que deseas comprar: hamburguesa-bebida-helado'
        )
        // condición pra fin del ciclo
    } else {
        seguirComprando = false
    }
}


//LLAMADA A CARRITO DE COMPRAS
console.log(carrito);
//valor inicial
let totalCompra = 0
//cálculo del Valor Total de la orden, considerando Cantidad de Productos seleccionados y precios
carrito.forEach(producto => {
    subtotal = (producto.precio) * (producto.requerido)
    totalCompra = totalCompra + subtotal
})
alert('El total de tu compra es: ' + totalCompra + ' pesos')

//llamada a la función pagar
pagar()


