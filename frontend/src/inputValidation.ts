export function inputValidationInitialise (){
    let emailText:HTMLElement|null =document.getElementById('emailText')
    let passwordText:HTMLElement|null =document.getElementById('passwordText')
    let repeatPasswordText:HTMLElement|null =document.getElementById('repeatPasswordText')
    
    if(emailText)emailText.classList.add('hidden')
    if(passwordText)passwordText.classList.add('hidden')
    if(repeatPasswordText)repeatPasswordText.classList.add('hidden')
  }

export function emailFlag(email:string) {
    let emailInput:HTMLElement|null =document.getElementById('email')
    let emailText:HTMLElement|null =document.getElementById('emailText')

    if(!email){
      if(emailInput)emailInput.style.borderColor='red'
      if(emailText)emailText.innerText='Can\'t be empty'    
      if(emailText)emailText.classList.remove('hidden')
    }
    else if( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      if(emailInput)emailInput.style.borderColor='red'
      if(emailText)emailText.innerText='Enter valid email'    
      if(emailText)emailText.classList.remove('hidden')      
    }
    else{
      if(emailInput)emailInput.style.borderColor='#5A698F'
      if(emailText)emailText.classList.add('hidden')      
    }
    
  }

export function passwordFlag(password:string) {
    let passwordInput:HTMLElement|null =document.getElementById('password')
    let passwordText:HTMLElement|null =document.getElementById('passwordText')

    if(!password){
      if(passwordInput)passwordInput.style.borderColor='red'
      if(passwordText)passwordText.classList.remove('hidden')
     }else{
      if(passwordInput)passwordInput.style.borderColor='#5A698F'
      if(passwordText)passwordText.classList.add('hidden')     
     }
  }

export function repeatPasswordFlag(repeatPassword:string) {
    let repeatPasswordInput:HTMLElement|null =document.getElementById('repeatPassword')
    let repeatPasswordText:HTMLElement|null =document.getElementById('repeatPasswordText')
    
    if(!repeatPassword){
      if(repeatPasswordInput)repeatPasswordInput.style.borderColor='red'
      if(repeatPasswordText)repeatPasswordText.classList.remove('hidden')
    }else{
      if(repeatPasswordInput)repeatPasswordInput.style.borderColor='#5A698F'
      if(repeatPasswordText)repeatPasswordText.classList.add('hidden')      
    }
  }