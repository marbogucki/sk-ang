import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from './core/services/logger.service';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { appInterceptors } from './core/interceptors';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DataService } from './core/services/data.service';
import { BookService, DataInterfaceService } from './core/models/book.service';
import { NgToolsComponent } from './feature/ng-tools/ng-tools.component';
import { ParentComponent } from './feature/ng-tools/parent/parent.component';
import { ChildComponent } from './feature/ng-tools/child/child.component';
import { TargetDirective } from './shared/directives/target-blank.directive';
import { BooksApiService } from './feature/ng-tools/services/one.service';
import { BooksService } from './feature/ng-tools/services/books.service.abstract';
import { BookMockService } from './feature/ng-tools/services/two.service';
import { SearchComponent } from './feature/ng-tools/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NgToolsComponent,
    ParentComponent,
    ChildComponent,
    TargetDirective,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      name: 'My demo first App NGRX',
      maxAge: 25,
      logOnly: environment.production,
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LoggerService,

    {
      provide: BookService,
      useClass: DataService,
    },
    {
      provide: BooksService,
      useClass: BooksApiService,
    },
    appInterceptors,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
