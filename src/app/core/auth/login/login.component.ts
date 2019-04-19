import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from "@angular/router"
import { WindowRef } from './../../components/windows/window-ref';
import { SharedService } from './../../services/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public ctrlForm = {
    submitted: false
  }
  constructor(
    private _authService: AuthService,
    private formBuilder: FormBuilder,
    private _windowRef: WindowRef,
    private router: Router,
    private _sharedService: SharedService
  ) {
    this.createForm();
  }
  ngOnInit() {
  }
  get f() { return this.loginForm.controls; }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.ctrlForm.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this._authService.fnLogin(this.loginForm.value).then((success:any)=>{
      this._sharedService.getSecure({ eventName: "login"});
      this.router.navigate(['/']);
    }).catch((err:any)=>{
      this._windowRef.showMessageBox(err.message, "error");
    });
  }
}
