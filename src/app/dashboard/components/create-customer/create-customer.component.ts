import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../interface/user.interface';
import { CustomerServiceService } from '../../services/customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css',
})
export class CreateCustomerComponent {
  @Output() isNewCustomer = new EventEmitter<boolean>();

  public visible: boolean = false;
  public ONLY_LETTERS: string = '[A-Za-z]';

  public profileForm = new FormGroup({
    sharedKey: new FormControl('', [Validators.required, Validators.minLength(4)]),
    businessId: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
  });

  constructor(private customerService: CustomerServiceService) {}

  showDialog(isOpen: boolean) {
    this.visible = isOpen;
  }

  onNewCustomer() {
    this.profileForm.reset();
    this.showDialog(false);
    this.isNewCustomer.emit(true);
  }

  handleSubmit() {
    const user = this.profileForm.value as User;

    console.log('user', user);
    this.customerService.createCustomer(user).subscribe({
      next: (response) => {
        console.log(typeof response);
        alert('Customer created successfully');
        this.onNewCustomer();
      },
      error: (message: string) => {
        this.profileForm.reset();
        this.showDialog(false);
        alert(message)
      },
        
    });
  }
}
