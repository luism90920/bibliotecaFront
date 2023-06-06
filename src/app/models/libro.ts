import { Autor } from "./autor";

export class Libro {

    id?: number;
    titulo: string;
    nombreAutor: String;
    autor: Autor;

    constructor(titulo: string, nombreAutor: String){
        this.titulo = titulo;
        this.nombreAutor = nombreAutor;
    }

}
