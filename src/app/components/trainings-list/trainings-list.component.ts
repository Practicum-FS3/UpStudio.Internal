import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalanderAvailableTraining } from 'src/app/Models/calanderAvailableTraining.model';
import { CustomerTrainingsDeatailsService } from 'src/app/Services/customerTrainingsDeatails.service';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss']
})
export class TrainingsListComponent implements OnInit {
  selectedTrainingId?: number;
  currentPage = 1;
  itemsPerPage = 3; 
  calanderAT: CalanderAvailableTraining[] = [];
  displayedcalanderAT: CalanderAvailableTraining[] = [];

  filterForm: FormGroup;

  constructor(
    private _ctdService: CustomerTrainingsDeatailsService,
    private _router: Router,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      date1: [null],
      date2: [null],
      past: [false],
      future: [false]
    });
  }

  ngOnInit(): void {
    this.loadTrainings();
    this.setupSearch();
  }

  setupSearch(): void {
    this.filterForm.valueChanges.subscribe(values => {
      console.log('Filter values:', values);  // Debug log
      this.filterTrainings(values);
    });
  }

  loadTrainings(): void {
    this._ctdService.getCustomerTrainingsDeatails().subscribe(details => {
      console.log('Loaded trainings:', details);  // Debug log
      this.calanderAT = details;
      this.updateDisplayedTrainings();
    });
  }

  updateDisplayedTrainings(): void {
    console.log("dsf");
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedcalanderAT = this.calanderAT.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if ((this.currentPage * this.itemsPerPage) < this.calanderAT.length) {
      this.currentPage++;
      this.updateDisplayedTrainings();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedTrainings();
    }
  }

  selectTraining(id: number): void {
    this.selectedTrainingId = id;
  }

  filterTrainings(filters: any): void {
    const { date1, date2, past, future } = filters;

    // Convert date strings to Date objects
    const validDate1 = date1 ? new Date(date1) : undefined;
    const validDate2 = date2 ? new Date(date2) : undefined;

    // Convert Date objects to YYYY-MM-DD strings for server compatibility
    const formattedDate1 = validDate1 ? this.formatDateForAPI(validDate1) : undefined;
    const formattedDate2 = validDate2 ? this.formatDateForAPI(validDate2) : undefined;

    console.log('Filtering with:', {
      past,
      future,
      startDate: formattedDate1,
      endDate: formattedDate2
    });  // Debug log

    // Pass the formatted dates to the filtering service
    this._ctdService.filterTrainings(past, future, formattedDate1, formattedDate2).subscribe(data => {
      console.log('Filtered trainings:', data);  // Debug log
      this.calanderAT = data;
      this.updateDisplayedTrainings();
    });
  }

  private formatDateForAPI(date: Date): string {
    // Format Date object to YYYY-MM-DD for API compatibility
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure two digits
    const day = String(date.getDate()).padStart(2, '0');       // Ensure two digits
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
}