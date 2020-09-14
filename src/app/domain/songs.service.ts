import { Injectable } from "@angular/core";

@Injectable()
export class SongsService {
    private songs: Array<string> = [];

    agregar(c: string) {
        this.songs.push(c);

    }
    buscar() {
        return this.songs;
    }
}