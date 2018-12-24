import { Injectable } from '@angular/core';

import { ToDo } from '../models/ToDo';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ToDoService {
  tasks = [
    new ToDo('Angular Session One', 'CDAC', true),
    new ToDo('Angular Session Two', 'Ansh', false),
    new ToDo('Angular Session Three', 'EE', false)
  ];

  constructor() { }
}
