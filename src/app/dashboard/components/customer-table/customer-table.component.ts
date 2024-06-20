import { Component } from '@angular/core';
import { CustomerServiceService } from '../../services/customer-service.service';
import { User } from '../../../interface/user.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { read, writeFileXLSX, utils, writeFile } from 'xlsx';

const excelHeader = [
  'Shared Key',
  'Business id',
  'Email',
  'Phone',
  'Create At',
];

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css',
})
export class CustomerTableComponent {
  public emptyResponseMessage = 'No data found';
  public customers: User[] = [];
  public isLoading: boolean = false;
  public worksheet = utils.json_to_sheet(this.customers);

  public searchForm = this.fb.group({
    search: ['', [Validators.required]],
  });

  constructor(
    private customerService: CustomerServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  searchCustomerByKey(event: any) {
    const sharedKey = event.target.value;
    console.log(sharedKey);
    if (sharedKey) {
      this.customerService.getCustomerBySharedKey(sharedKey).subscribe({
        next: (response) => { 
          this.customers = [response]
        },
        error: (message: string) => {
          this.customers = [];
          this.emptyResponseMessage = message;
        },
      });
    } else {
      this.getAllCustomers();
    }
  }

  getAllCustomers() {
    this.isLoading = false;
    this.customerService.getAllCustomers().subscribe((response) => {
      this.customers = response;
      this.isLoading = false;
    });
  }

  async exportToExcel() {
    const worksheet = utils.json_to_sheet(this.customers);
    utils.sheet_add_aoa(worksheet, [excelHeader], {
      origin: 'A1',
      cellStyles: true,
    });

    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Customer Lists');

    await writeFile(workbook, 'Employee Lists.xlsx', { compression: true });
  }
}
