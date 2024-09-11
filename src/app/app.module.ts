import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './feature/auth/login/login.component';
import {Routes} from '@angular/router';
import {AuthComponent} from './feature/auth/auth.component';
import {InputTextModule} from 'primeng/inputtext';
import { DashboardComponent } from './feature/dashboard/dashboard/dashboard.component';
import { CoursesComponent } from './feature/Courses/courses/courses.component';
import {TableModule} from 'primeng/table';
import { CourseDetailsDialogComponent } from './feature/Courses/course-details-dialog/course-details-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivitiesComponent } from './feature/Courses/activities/activities.component';
import { BooklabsComponent } from './feature/labs/booklabs/booklabs.component';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {FormsModule} from '@angular/forms';
import { AddEditCoursesComponent } from './feature/Courses/AddEditCourse/add-edit-courses/add-edit-courses.component';
import {MatInputModule} from '@angular/material/input';
import { MembershipComponent } from './feature/Membership/membership/membership.component';
import {CardModule} from 'primeng/card';
import {CoursesService} from 'src/app/feature/Courses/courses.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CheckboxModule} from 'primeng/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {IntercepterService} from './core/common/intercepter.service';
import {ToastrModule} from 'ngx-toastr';
import { SidebarComponent } from './includes/sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import {RippleModule} from 'primeng/ripple';
import {StyleClassModule} from 'primeng/styleclass';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CoursesComponent,
    CourseDetailsDialogComponent,
    ActivitiesComponent,
    BooklabsComponent,
    AddEditCoursesComponent,
    MembershipComponent,
    SidebarComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        InputTextModule,
        TableModule,
        MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule,
        CalendarModule,
        SelectButtonModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            closeButton: true
        }),
        MatInputModule,
        CardModule,
        HttpClientModule,
        CheckboxModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        SidebarModule,
        RippleModule,
        StyleClassModule,

    ],
  providers: [CoursesService, {  provide: HTTP_INTERCEPTORS,  useClass: IntercepterService,  multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }