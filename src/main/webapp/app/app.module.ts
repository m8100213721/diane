import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { AnacreditSharedModule, UserRouteAccessService } from './shared';
import { AnacreditAppRoutingModule} from './app-routing.module';
import { AnacreditHomeModule } from './home/home.module';
import { AnacreditAdminModule } from './admin/admin.module';
import { AnacreditAccountModule } from './account/account.module';
import { AnacreditEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        AnacreditAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        AnacreditSharedModule,
        AnacreditHomeModule,
        AnacreditAdminModule,
        AnacreditAccountModule,
        AnacreditEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class AnacreditAppModule {}
