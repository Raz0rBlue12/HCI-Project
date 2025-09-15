function validate (){
    let form = document.getElementById("formContact")
    let name = document.getElementById("name")
    let errorName = document.getElementById("invalid-name")
    let email = document.getElementById("email")
    let date = document.getElementById("date")
    let errorDate = document.getElementById("invalid-date")
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let errorGender = document.getElementById("invalid-gender")
    let agree = document.getElementById("agree")
    let errorAgree = document.getElementById("invalid-agree")

    errorName.innerHTML = ""
    errorDate.innerHTML = ""
    errorGender.innerHTML = ""
    errorAgree.innerHTML = ""

    if (name.value == ""){
        errorName.innerHTML = "This field cannot be empty."
        return false
    } else if (name.value.length <= 5){
        errorName.innerHTML = "Name must be at least 5 characters."
        return false
    }

    if (!emailValidate(email.value)){
        return false
    }

    if (date.value) {
        let dob = new Date(date.value);
        let today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        let i = today.getMonth() - dob.getMonth();
        if (i < 0 || (i === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        if (age < 13) {
            errorDate.innerHTML = "You must be at least 13 years old."
            return false;
        }
    } else {
        errorDate.innerHTML = "This field cannot be empty."
        return false;
    }

    if (!male.checked && !female.checked){
        errorGender.innerHTML = "Please select a gender"
        return false
    }

    if (!agree.checked){
        errorAgree.innerHTML = "You must agree to the Terms and Conditions and read the Privacy Policy."
        return false
    }

    alert("Thank you for joining our community!")
    form.submit()
}

function emailValidate(email){
    let errorEmail = document.getElementById("invalid-email")

    errorEmail.innerHTML = ""

    let count = 0;

    for (let i = 0; i < email.length; i++){
        if (email[i] == '@'){
            count = 1
        }
    }

    if (email == ""){
        errorEmail.innerHTML = "This field cannot be empty."
        return false
    } else if (count != 1){
        errorEmail.innerHTML = "Email must contain at least one '@'"
        return false
    }

    return true
}