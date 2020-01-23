
  console.log("it is connected") ;
  let myFullName = document.forms["myForm"]["myFullName"]
  console.log("fullname",myFullName)
   
   /* validate Form ***********************/ 
   
 function validateForm(){
    let myFullName = document.forms["myForm"]["myFullName"].value;
        let myAddress = document.forms["myForm"]["myAddress"].value;
        let myEmail = document.forms["myForm"]["myEmail"].value;
        let Emailreg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       let passReg =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
       let myPassword = document.forms["myForm"]["myPassword"];


        if ((  myFullName==null || myFullName=="" ) || (  myAddress == null || myAddress =="" ) ) {
            alert("fields should not be empty");
            document.forms.myFullName.focus()
            return false;
        }
        
         else if ( (Emailreg.test(myEmail) == false)) {
            alert("You email address is not valid");
            document.forms.myEmail.focus()
            return false
        } 

        /*else if (passLength < 8) {
            document.forms.myPassword.focus()
            return false

        }*/
        
        else if   (!myPassword.value.match(passReg)) {
            alert("Your password must be a combination of charatacters , numbers and at least a capital letter");
            document.forms.myPassword.focus()
            return false
        }

    }

let reset=document.getElementById("reset")
reset.addEventListener("click",()=>{resetForm()})
    /* reset Form **************************/
     function resetForm() {
        document.getElementById("myFormSubmission").reset();
     }
   