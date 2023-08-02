import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder) { }

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
  
  
    fetch('http://localhost:8080/auth/register2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
  
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

}