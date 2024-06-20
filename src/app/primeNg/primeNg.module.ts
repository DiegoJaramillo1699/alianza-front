import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

const exportedComponents = [
  ButtonModule,
  DialogModule,
  DropdownModule,
  IconFieldModule,
  InputIconModule,
  InputTextModule,
  MenuModule,
  MultiSelectModule,
  TableModule,
  TagModule,
];

@NgModule({
  exports: [exportedComponents],
  imports: [exportedComponents],
})
export class PrimeNgModule {}
