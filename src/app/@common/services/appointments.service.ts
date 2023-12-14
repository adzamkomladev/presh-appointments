import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Appointment } from '@common/models/appointments/appointment.model';
import { Create } from '@common/models/appointments/create.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private readonly appointments = new BehaviorSubject<Appointment[]>([]);


  get appointments$() {
    return this.appointments.asObservable();
  }

  create(payload: Create) {
    const appointments = this.appointments.value;
    const updated = [...appointments, { ...payload, id: `${Date.now()}` }];
    console.log({ appointments, updated })
    this.appointments.next(updated);
  }

  getAll() {
    return this.appointments.asObservable();
  }

  remove(id: string) {
    const appointments = this.appointments.value;

    this.appointments.next(appointments.filter(a => a.id !== id));
  }
}
