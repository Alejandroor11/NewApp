import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { newModulRoutingModule } from "./newModul-routing.module";
import { newModulComponent } from "./newModul.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        newModulRoutingModule
    ],
    declarations: [
        newModulComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class newModulModule { }
