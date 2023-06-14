import { Autor } from "./autor";
import { Editorial } from "./editorial";
import { Genero } from "./genero";

export class Libro {

    id?: number;
    titulo: string;
    nombreAutor: String;
    autor: Autor;
    ejemplares: number;
    nombreGenero: String;
    genero: Genero;
    editorial: Editorial;
    nombreEditorial: String;

    constructor(titulo: string, nombreAutor: String, ejemplares: number, nombreGenero: String, nombreEditorial: String){
        this.titulo = titulo;
        this.nombreAutor = nombreAutor;
        this.ejemplares = ejemplares;
        this.nombreGenero = nombreGenero;
        this.nombreEditorial = nombreEditorial;
    }

}
