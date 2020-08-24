import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';

export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line:typedef
  createDb() {
    const empl = [
      {id: 1, name: 'John Smith', designation: 'UI Specialist', skills: 'UI Visual', technologies: 'Angular',
        availability: 1, baseLocation: 'Indore', openRelocate: 'Yes' },
      {id: 2, name: 'Avril', designation: 'Senior UI Specialist', skills: 'UI', technologies: 'Type Script',
        availability: 2, baseLocation: 'Bangalore', openRelocate: 'No' },
      {id: 3, name: 'Green Day', designation: 'Associate UI Specialist', skills: 'UI Designer', technologies: 'HTML',
        availability: 1, baseLocation: 'Indore', openRelocate: 'Yes' },
      {id: 4, name: 'Bryan Adams', designation: 'Lead UI Specialist', skills: 'UI Graphics', technologies: 'Angular',
        availability: 4, baseLocation: 'Pune', openRelocate: 'No' },
      {id: 5, name: 'Tailor Swift', designation: 'UI Specialist', skills: 'UI Visual', technologies: 'TypeScript',
        availability: 5, baseLocation: 'Bangalore', openRelocate: 'Yes' },
      {id: 6, name: 'Nick Jones', designation: 'Lead UI Specialist', skills: 'UI Visual', technologies: 'Angular',
        availability: 3, baseLocation: 'Pune', openRelocate: 'No' },
      {id: 7, name: 'Denis Hack', designation: 'Associate UI Specialist', skills: 'UI Graphics', technologies: 'JavaScript',
        availability: 2, baseLocation: 'Indore', openRelocate: 'Yes' },
      {id: 8, name: 'Kim Adams', designation: 'UI Specialist', skills: 'UI Designer', technologies: 'HTML',
        availability: 1, baseLocation: 'Hyderabad', openRelocate: 'No' },
      {id: 9, name: 'Joe Will', designation: 'Senior UI Specialist', skills: 'UI Visual', technologies: 'Angular',
        availability: 2, baseLocation: 'Noida', openRelocate: 'Yes' }
    ];
    return {empl};
  }
}
