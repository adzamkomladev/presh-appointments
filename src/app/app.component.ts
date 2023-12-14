import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormComponent } from "@common/components/appointments/form/form.component";
import { ListComponent } from './@common/components/appointments/list/list.component';

@Component({
  selector: 'presh-appointments-root',
  standalone: true,
  templateUrl: './app.component.html',
  styles: [``],
  imports: [CommonModule, RouterOutlet, FormComponent, ListComponent]
})
export class AppComponent {
  title = 'presh-appointments';
}
