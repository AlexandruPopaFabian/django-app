function validateForm() {
    let prenume = document.getElementById("prenume").value.trim();
    let nume = document.getElementById("nume").value.trim();
    let email = document.getElementById("email").value.trim();
    let adresa = document.getElementById("adresa").value.trim();
    let salutation = document.getElementById("salutation").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let birthdate=document.getElementById("data_nasterii").value;
    let profile_picture=document.getElementById("poza_profil").value;
    let cv=document.getElementById("cv").value;
    let interest = document.querySelector('input[name="interest"]:checked');

    if (prenume === "" || nume === "" || email === "" ) {
        alert("Te rog completeaza numele prenumele si email-ul!");
        return false;
    }

    if (!gender) {
        alert("Trebuie sa selectezi un gen!");
        return false;
    }

    if(!salutation)
    {
        alert("Trebuie sa selectezi o metoda de adresare!");
        return false;
    }

    if(!birthdate)
    {
        alert("Introduceti data nasterii!");
        return false;
    }

    let emailPattern = /^[a-z]+\.[a-z]+[0-9]{0,2}@e-uvt\.ro$/;

    if (!emailPattern.test(email)) {
        alert("Formatul emailului nu este corect! Trebuie sa fie de forma: prenume.nume@e-uvt.ro.");
        return false;
    }
    if(!interest)
    {
        alert("Alege minim un interes!");
        return false;
    }
    if(profile_picture === "" || cv === "")
    {
        alert("Trebuie incarcate ambele fisiere");
        return false;
    }
    alert("Success!");
    return true;
}
