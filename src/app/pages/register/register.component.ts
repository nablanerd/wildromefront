import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Router} from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!: FormGroup; 

  errorMessage : string ="";


  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      provincename: ['', Validators.required]
    });
  }

  onSubmit() {
    
    const formData = this.registerForm.value;
  
    if(formData.password === formData.cpassword && (formData.password && formData.cpassword))
    {

    fetch('http://localhost:8080/auth/register2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(body => {
  
      console.log(body);

if(body.data.message === "Invalid params")
{
this.errorMessage = "Invalid params"
}
else 
{
  this.router.navigate(['/login'])
}


      

    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  else {
this.errorMessage = "Password and Confirmed Password different or incorrect"

  }

}

}
