const CarritoCompra = require("../index");

describe("Clase de CarritoCompra", () => {

    it("Inicializa el carrito como un array vacio", () => {
        const carrito = new CarritoCompra();

        expect(carrito).toBeInstanceOf(CarritoCompra);
        // expect(carrito.productos).toEqual([]);
        expect(Array.isArray(carrito.productos)).toBe(true);
        expect(carrito.productos.length).toBe(0);
    });

    it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
        const carrito = new CarritoCompra();

        expect(carrito.agregarProducto).toBeDefined();
        carrito.agregarProducto({ nombre: "Remera", price: 100 });
        expect(carrito.productos.length).toBe(1);
        expect(carrito.productos[0]).toEqual({ nombre: "Remera", price: 100 });
        carrito.agregarProducto({ nombre: "Zapatos", price: 100 });
        carrito.agregarProducto({ nombre: "Buzo", price: 100 });
        expect(carrito.productos.length).toBe(3);

    });

    it("Calcula el total de la compra sumando el precio de todos los productos", () => {
        const carrito = new CarritoCompra();


        expect(carrito.calcularTotal).toBeDefined();
        carrito.agregarProducto({ nombre: "Remera", price: 100 });
        carrito.agregarProducto({ nombre: "Zapatos", price: 100 });
        carrito.agregarProducto({ nombre: "Buzo", price: 100 });

        expect(carrito.calcularTotal()).toBe(300);
    });

    it("Aplica un descuento al total de la compra segun el porcentaje especifico", () => {
        const carrito = new CarritoCompra();


        expect(carrito.aplicarDescuento).toBeDefined();
        carrito.agregarProducto({ nombre: "Remera", price: 10 });
        carrito.agregarProducto({ nombre: "Zapatos", price: 10 });
        carrito.agregarProducto({ nombre: "Buzo", price: 10 });
        expect(carrito.aplicarDescuento(10)).toBe(27);

    });
})