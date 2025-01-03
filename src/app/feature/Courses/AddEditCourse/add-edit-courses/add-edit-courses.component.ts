import { Component, Inject, OnInit } from '@angular/core';
import { CoursesService } from '../../courses.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: 'app-add-edit-courses',
  templateUrl: './add-edit-courses.component.html',
  styleUrls: ['./add-edit-courses.component.scss']
})
export class AddEditCoursesComponent implements OnInit {
  course: any = {};
  timePeriodList: any;
  status: any;
  selectedFiles: File[] = [];
  public color: ThemePalette = 'primary';
  labList: any;
  startTime: any;
  endTime: any;
  minEndTime: any;
  public date: moment.Moment | undefined;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  maxEndTime: any;
   courseList: any;
  constructor(
    public dialogRef: MatDialogRef<AddEditCoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private courseService: CoursesService
  ) {
    if (data) {
      this.course = { ...data };
    }
  }

  ngOnInit(): void {
    this.getTimeList();
    this.getStatus();
  }

  getTimeList(): void {
    this.courseService.getTimePeriod().subscribe(res => {
      this.timePeriodList = res;
    });
  }

  getStatus(): void {
    this.courseService.getStatus().subscribe(res => {
      this.status = res;
    });
  }

  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files); // Store selected files
  }

  save(): void {
    this.course.startDateTime = this.formatDate(this.course.startDateTime);
    this.course.endDateTime = this.formatDate(this.course.endDateTime);

    const saveOperation = this.course.id
      ? this.courseService.update(this.course)
      : this.courseService.addCourse(this.course);

    saveOperation.subscribe(res => {
      this.courseList = res;
      if (res) {
        this.uploadFiles(this.courseList.id); // Upload files with the course ID
      }
      this.dialogRef.close(res); // Close dialog and return response
    });
  }

  uploadFiles(courseId: number): void {
    const formData = new FormData();
    this.selectedFiles.forEach(file => formData.append('files', file));

    this.courseService.uploadCourseFiles(courseId, formData).subscribe(
      response => console.log('Files uploaded successfully', response),
      error => console.error('Error uploading files', error)
    );
  }

  formatDate(date: string | Date): string {
    const d = new Date(date);
    return `${d.getFullYear()}-${('0' + (d.getMonth() + 1)).slice(-2)}-${('0' + d.getDate()).slice(-2)} `
      + `${('0' + d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}:${('0' + d.getSeconds()).slice(-2)}`;
  }

  resetForm(): void {
    this.course = {};
  }
}
