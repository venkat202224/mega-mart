import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


interface Kafein {
    name: string;
    address: string;
}

@Component({
    selector: 'app-signup',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './webhome.component.html',
    styleUrl: './webhome.component.css',
    standalone: true,
})

export class AppWebhomeComponent {
    ordersList = [{
        "order": "#1005",
        "Date": "June 13,2023",
        "status": "Completed",
        "total": "$199.00",
    },

    {
        "order": "#1004",
        "Date": "June 12,2023",
        "status": "Completed",
        "total": "$139.00",
    },

    {
        "order": "#1003",
        "Date": "June 11,2023",
        "status": "Completed",
        "total": "$199.00",
    },


    {
        "order": "#1002",
        "Date": "June 10,2023",
        "status": "Processing",
        "total": "$199.00",
    },

    {
        "order": "#1001",
        "Date": "June 9,2023",
        "status": "Processing",
        "total": "$79.00",
    }]

    name = "Angular";
    url = "https://jsonplaceholder.typicode.com/todos";
    httpData: any;



    // constructor(private http: HttpClient) { }

    // ngOnInit() {
    //        this.callApi();
    // }

    // callApi() {
    //     this.http.get<Kafein[]>(this.url).subscribe(results => {
    //         this.httpData = results;
    //         console.log(this.httpData)
    //     });
    // }
    constructor(private router: Router) { }
  navigateProducts(event: any) {
    event.preventDefault();
    this.router.navigate(['/products']);
  }

navigateAdmin(event: any) {
    event.preventDefault();
    this.router.navigate(['/admin']);
  }


navigateCustomer(event: any) {
    event.preventDefault();
    this.router.navigate(['/customer']);
  }


}