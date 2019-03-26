import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule,
  } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [ CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatRippleModule,
        MatToolbarModule,
    ],
    exports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatRippleModule
    ],
    providers: [],
})
/** Import modules required from angular material */
export class MaterialModule {}