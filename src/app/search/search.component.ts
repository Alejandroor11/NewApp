import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";
import { SongsService } from "../domain/songs.service";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    
})
export class SearchComponent implements OnInit {

    constructor(private noticias : NoticiasService, private songs : SongsService) {
        // Use the component constructor to inject providers.
    }
    
    ngOnInit(): void {
        this.noticias.agregar("hola1");
        this.noticias.agregar("hola2");
        this.noticias.agregar("hola3");
        this.songs.agregar("Dura");
        this.songs.agregar("Dura2");
        this.songs.agregar("Dura3");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
