import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { WebappComponent } from './components/webapp/webapp.component';
import { MobileappComponent } from './components/mobileapp/mobileapp.component';
import { FrontendComponent } from './components/webapp/frontend/frontend.component';
import { BackendComponent } from './components/webapp/backend/backend.component';
import { HomeComponent } from './components/home/home.component';
import { AngularComponent } from './components/webapp/frontend/angular/angular.component';
import { ReactComponent } from './components/webapp/frontend/react/react.component';
import { VueComponent } from './components/webapp/frontend/vue/vue.component';
import { NodeComponent } from './components/webapp/backend/node/node.component';
import { FlutterComponent } from './components/mobileapp/flutter/flutter.component';
import { ReactNativeComponent } from './components/mobileapp/react-native/react-native.component';
import { PythonComponent } from './components/webapp/backend/python/python.component';
import { ApiComponent } from './components/webapp/backend/api/api.component';
import { DbComponent } from './components/webapp/backend/db/db.component';
import { MysqlComponent } from './components/webapp/backend/mysql/mysql.component';
import { MongodbComponent } from './components/webapp/backend/mongodb/mongodb.component'

@NgModule({
  declarations: [
    AppComponent,
    WebappComponent,
    MobileappComponent,
    FrontendComponent,
    BackendComponent,
    HomeComponent,
    AngularComponent,
    ReactComponent,
    VueComponent,
    NodeComponent,
    FlutterComponent,
    ReactNativeComponent,
    PythonComponent,
    ApiComponent,
    DbComponent,
    MysqlComponent,
    MongodbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
