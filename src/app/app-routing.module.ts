import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MobileappComponent } from './components/mobileapp/mobileapp.component';
import { AngularComponent } from './components/webapp/frontend/angular/angular.component';
import { ReactComponent } from './components/webapp/frontend/react/react.component';
import { VueComponent } from './components/webapp/frontend/vue/vue.component';
import { FrontendComponent } from './components/webapp/frontend/frontend.component';
import { WebappComponent } from './components/webapp/webapp.component';
import { BackendComponent } from './components/webapp/backend/backend.component';
import { NodeComponent } from './components/webapp/backend/node/node.component';
import { FlutterComponent } from './components/mobileapp/flutter/flutter.component';
import { ReactNativeComponent } from './components/mobileapp/react-native/react-native.component';
import { PythonComponent } from './components/webapp/backend/python/python.component';
import { ApiComponent } from './components/webapp/backend/api/api.component';
import { DbComponent } from './components/webapp/backend/db/db.component';
import { MysqlComponent } from './components/webapp/backend/mysql/mysql.component';
import { MongodbComponent } from './components/webapp/backend/mongodb/mongodb.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'webapp', component: WebappComponent},
  { path: 'frontend', component: FrontendComponent},
  { path : 'angular', component: AngularComponent},
  { path : 'react', component: ReactComponent},
  { path: 'vue', component: VueComponent},
  { path: 'backend',component: BackendComponent}, 
  { path: 'node', component:NodeComponent},
  { path: 'mobileapp', component: MobileappComponent},
  { path: 'flutter', component: FlutterComponent},
  { path: 'react-native',component: ReactNativeComponent },
  { path: 'python',component: PythonComponent },
  { path: 'api',component: ApiComponent },
  { path: 'db', component: DbComponent},
  { path: 'mysql',component: MysqlComponent },
  { path: 'mongodb', component: MongodbComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
