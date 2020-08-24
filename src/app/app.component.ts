import { Component, OnInit, Inject } from '@angular/core';
import {EmptyError, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopupComponent} from './popup/popup.component';

export interface Employee {
  id: number;
  name: string;
  designation: string;
  skills: string;
  technologies: string;
  availability: number;
  baseLocation: string;
  openRelocate: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public employees: Employee[];
  private url = 'api/empl';
  displayedColumns: string[] = ['select', 'id', 'name', 'designation', 'skills', 'technologies', 'availability',
    'baseLocation', 'openRelocate', 'openModal'];
  locations = ['Indore', 'Pune', 'Bangalore', 'Indore'];
  locationTitle = 'Locations';
  skills = ['Angular', 'HTML', 'Javascript', 'TypeScript'];
  sillTitle = 'Skills';
  technologies = ['Angular', 'HTML', 'Javascript', 'TypeScript'];
  techTitle = 'Technology';
  dataSource = [];
  newDataSource = [];
  selectedItems = [];
  filterValue  = {
    technology: [],
    skills: [],
    location: []
  };
  selection = new SelectionModel<Employee>(true, []);
  constructor(private http: HttpClient, public matDialog: MatDialog) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getEmployees().subscribe( (data) => {
      this.dataSource = data;
      this.newDataSource = this.dataSource;
    });
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  // tslint:disable-next-line:typedef
  selectedChange(event, type) {
    // console.log('event----', event);
    this.filterValue[type] = event;
  }

  // tslint:disable-next-line:typedef
  filterList() {
    this.dataSource = this.newDataSource.filter(emp =>
      this.filterValue.technology.includes(emp.technologies) ||
      this.filterValue.location.includes(emp.baseLocation) ||
      this.filterValue.skills.includes(emp.skills)
    );
    console.log(this.filterValue);
    if (this.filterValue.technology.length === 0 && this.filterValue.location.length === 0 && this.filterValue.skills.length === 0){
      this.dataSource = this.newDataSource;
    }
  }

  cancel() {
    this.dataSource = this.newDataSource;
  }

  // tslint:disable-next-line:typedef
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // tslint:disable-next-line:typedef
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Employee): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  // tslint:disable-next-line:typedef
  openModal(data, event) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'popup-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    dialogConfig.data = data;
    const popupDialog = this.matDialog.open(PopupComponent, dialogConfig);
  }
}
