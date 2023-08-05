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

  errorMessage : string ="";

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

  if(formData.username && formData.password)
  {

  fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    
    if(response.status == 400)
    {
      throw new Error('BAD_REQUEST')
    }
    else
    {

      return response.json()
    }
    
  })
  .then(body => {

if(body.data)
{
  localStorage.setItem("token", body.data.token );
    console.log(body.data.token);
    this.router.navigate(['/info'])


}
else 
{

  this.errorMessage = "Login error"
}
  
    
  })
  .catch(error => {
   
    console.error('Error:', error);
  });
  }

  else {
    this.errorMessage = "Username ou Password incorrect"

  }

}

}