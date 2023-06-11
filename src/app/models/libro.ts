import { Autor } from "./autor";

export class Libro {

    id?: number;
    titulo: string;
    nombreAutor: String;
    autor: Autor;
    ejemplares: number;

    constructor(titulo: string, nombreAutor: String, ejemplares: number){
        this.titulo = titulo;
        this.nombreAutor = nombreAutor;
        this.ejemplares = ejemplares;
    }

}
