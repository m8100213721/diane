import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    AnacreditSharedLibsModule,
    JhiLanguageHelper,
    FindLanguageFromKeyPipe,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        AnacreditSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        AnacreditSharedLibsModule,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class AnacreditSharedCommonModule {}
