import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        ContattiComponent,
        NavbarComponent,
        FooterComponent,
        AdminComponent,
        LoginComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        CommonModule,
        NgIf,
        BrowserModule, 
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,    
            
    ]
})
export class AppModule { }
