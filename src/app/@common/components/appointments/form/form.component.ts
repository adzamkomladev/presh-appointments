import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Create } from '@common/models/appointments/create.model';

import { AppointmentsService } from '@common/services/appointments.service';

@Component({
  selector: 'presh-appointments-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <form #appointmentForm="ngForm" (ngSubmit)="onSubmit()" class="flex flex-col">
    <div class="flex flex-col">
        <label for="title">Title</label>
        <input [(ngModel)]="appointment.title" id="title" type="text" name="title" #title="ngModel" required />
        <p [hidden]="title.valid || title.pristine">Title is required</p>
    </div>
    <div class="flex flex-col">
        <label for="date">Date</label>
        <input [(ngModel)]="appointment.date" id="date" type="datetime-local" name="date" #date="ngModel" required />
        <p [hidden]="date.valid || date.pristine">Date is required</p>
    </div>
    <button class="border-1 bg-yellow-500 text-black p-3" [disabled]="!appointmentForm.form.valid"
        type="submit">Submit</button>
  </form>
  `,
  styles: []
})
export class FormComponent {
  appointment: Create = { date: new Date(), title: '' }

  constructor(private appointmentsService: AppointmentsService) { }

  onSubmit() {
    console.log(this.appointment, 'THIS IS THE Appointment')
    this.appointmentsService.create(this.appointment);
  }
}
