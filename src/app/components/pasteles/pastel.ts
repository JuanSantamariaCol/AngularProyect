export class Pastel {
    id:number;
    idCliente:number;
    sabor:string;
    fechaEnt:string;
    precio:number;

    constructor(id:number,idCliente:number,sabor:string,fechaEnt:string,precio:number){
        this.id = id;
        this.idCliente = idCliente;
        this.sabor = sabor;
        this.fechaEnt = fechaEnt;
        this.precio = precio;
    }

}
