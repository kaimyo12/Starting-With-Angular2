import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'my-app',
  template: 
  `<h1>{{name}}</h1>
   <p><strong>Email: </strong> {{email}}</p>
   <p><strong>Address: </strong> {{address.street}} {{address.barangay}} {{address.province}}</p>
   <button (click)="toggleHobbies()">{{showHobbies ? 'Hide Hobbies' : 'Show Hobbies'}}</button>
   <div *ngIf="showHobbies">
   <ul>
      <li *ngFor='let hobby of hobbies; let i = index'>
        {{hobby}} <button (click) = 'deleteHobby(i)'>X</button>
      </li>
   </ul>
   <form (submit)="addHobby(hobby.value)">
      <label> Add Hobby : </label>
      <input type="text" #hobby/><br/>
  </form>
   </div>
   <hr>
   <h3> Edit User</h3>
   <form>
      <label> Name : </label>
      <input type="text" name="name" [(ngModel)]="name"/><br/>
      <label> Email : </label>
      <input type="text" name="email" [(ngModel)]="email"/><br/>
      <label> Street : </label>
      <input type="text" name="address.street" [(ngModel)]="address.street"/><br/>
      <label> Barangay : </label>
      <input type="text" name="address.barangay" [(ngModel)]="address.barangay"/><br/>
      <label> Province : </label>
      <input type="text" name="address.province" [(ngModel)]="address.province"/><br/>
   </form>
  `,
  providers: [AppService]
})

export class AppComponent  
{ 
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  label: string;

  constructor(appService: AppService)
  {
      this.name = 'Kim';
      this.email = 'kaimyo24@gmail.com';
      this.address = 
      {
          street: 'Purok 6',
          barangay: 'San Nicolas Arayat,',
          province: 'Pampanga'
      }
      this.hobbies = appService.getHobbies();
      this.showHobbies = false;
  }

  toggleHobbies()
  {
    if(this.showHobbies == false)
    {
      this.showHobbies = true;
    }
    else
    {
      this.showHobbies = false;
    }
  }

  addHobby(hobby : string)
  {
      this.hobbies.push(hobby);
  }

  deleteHobby(i: any)
  {
    this.hobbies.splice(i, 1);
  }

}

interface address
{
  street: string;
  barangay: string;
  province: string;
}

