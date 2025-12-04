class CarritoCompra {
    constructor() {
        this.productos = [];
    }
    calcularTotal() {
        return this.productos.reduce((acc, producto) => acc + producto.price, 0);
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    aplicarDescuento(descuento) {
        const total = this.calcularTotal();
        return total - (total * descuento) / 100;
    }
};

module.exports = CarritoCompra;




