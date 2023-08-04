import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  connectForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.connectForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){

    
  const formData = this.connectForm.value;

 
  console.log("formData", formData);
  
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


    this.router.navigate(['/info'])
    
  })
  .catch(error => {
   
    console.error('Error:', error);
  });
  }
}