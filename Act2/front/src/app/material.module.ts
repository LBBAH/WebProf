import { NgModule } from "@angular/core";


import { MatButtonModule } from '@angular/material/button'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@NgModule({
    imports:[
        MatButtonModule,
        MatAutocompleteModule
    ],
    exports:[ 
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule
    ]
})

export class MaterialModule{}