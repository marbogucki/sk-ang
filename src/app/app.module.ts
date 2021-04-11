import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from './core/services/logger.service';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { appInterceptors } from './core/interceptors';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [LoggerService, appInterceptors],
  bootstrap: [AppComponent],
})
export class AppModule {}
