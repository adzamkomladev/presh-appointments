import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Appointment } from '@common/models/appointments/appointment.model';

import { AppointmentsService } from '@common/services/appointments.service';

@Component({
  selector: 'presh-appointments-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h3 class="text-2xl">This is the list for appointments</h3>
  <div class="flex flex-col">
    @for (a of appointments$ | async; track a.id) {
        <div class="flex flex-col shadow-xl m-3 p-4">
            <h3 class="text-xl">Title: {{ a.title }}</h3>
            <p>Date: {{ a.date }} </p>
            <p>ID: {{ a.id }}</p>
        </div>
    }
  </div>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  appointments$!: Observable<Appointment[]>;

  constructor(private appointmentsService: AppointmentsService) { }

  ngOnInit() {
    this.appointments$ = this.appointmentsService.getAll();
  }
}
