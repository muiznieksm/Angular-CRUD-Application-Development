import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss'],
})
export class UserAddEditComponent {
  userForm: FormGroup;

  education: string[] = [
    'High School',
    'Higher Education',
    'Vocational Education and Training',
    'Undergraduate Education',
    'Postgraduate Education',
  ];

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _dialogRef: DialogRef<UserAddEditComponent>
  ) {
    this.userForm = this._fb.group({
      image: '',
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
    });
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      this._userService.addUser(this.userForm.value).subscribe({
        next: (val: any) => {
          alert('added seccesfuly');
          this._dialogRef.close();
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }
}
