import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  connectForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.connectForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){

    
  const formData = this.connectForm.value;

 
  fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    localStorage.setItem("token", data.data.token );
    console.log(data.data.token);
    
  })
  .catch(error => {
   
    console.error('Error:', error);
  });
  }
}