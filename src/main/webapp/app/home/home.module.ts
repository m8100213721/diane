import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnacreditSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';

@NgModule({
    imports: [
        AnacreditSharedModule,
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnacreditHomeModule {}
