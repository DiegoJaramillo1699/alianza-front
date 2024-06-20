import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers!: Customer[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = false;

  activityValues: number[] = [0, 100];


  constructor() { }

  ngOnInit() {
    this.customers = [
      {
          id: 1000,
          name: 'James Butt',
          country: {
              name: 'Algeria',
              code: 'dz'
          },
          company: 'Benton, John B Jr',
          date: '2015-09-13',
          status: 'unqualified',
          verified: true,
          activity: 17,
          representative: {
              name: 'Ioni Bowcher',
              image: 'ionibowcher.png'
          },
          balance: 70663
      },
      {
          id: 1001,
          name: 'Josephine Darakjy',
          country: {
              name: 'Egypt',
              code: 'eg'
          },
          company: 'Chanay, Jeffrey A Esq',
          date: '2019-02-09',
          status: 'proposal',
          verified: true,
          activity: 0,
          representative: {
              name: 'Amy Elsner',
              image: 'amyelsner.png'
          },
          balance: 82429
      },
      {
          id: 1002,
          name: 'Art Venere',
          country: {
              name: 'Panama',
              code: 'pa'
          },
          company: 'Chemel, James L Cpa',
          date: '2017-05-13',
          status: 'qualified',
          verified: false,
          activity: 63,
          representative: {
              name: 'Asiya Javayant',
              image: 'asiyajavayant.png'
          },
          balance: 28334
      }]
      this.customers.forEach(customer => customer.date = new Date());
  }

  getSeverity(status: string) {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return 'info';
        default:
            return 'info'
    }
}

}


export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: number;
}