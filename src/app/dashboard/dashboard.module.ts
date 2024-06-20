import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../primeNg/primeNg.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CustomerComponent } from './pages/customer/customer.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';

@NgModule({
  declarations: [
    CustomerComponent,
    DashboardLayoutComponent,
    SideMenuComponent,
    CustomerTableComponent,
    CreateCustomerComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
