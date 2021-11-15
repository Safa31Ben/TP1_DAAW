
//  tableau d'utilisateurs
let users = [
    {
        firstName: "Safa",
        lastName: "BENABDESSADOK",
        birthday: "01-01-1999",
        adress: "Touggourt",
        email: "safa@gmail.com",
        phoneNum: "06 00 00 00 00",
        userName: "safsaf",
        password: "azerty"
    } 
]; 

// variables
let authenticationForm = document.getElementById("authenticationForm");
let inscriptionForm = document.getElementById("inscriptionForm");
let inputs = document.querySelectorAll('.inputs');
let submit = document.querySelector('.submit');
let invalidMsg = document.querySelector('.invalid');

submit.onclick = () => {

    //  Formulaire d'authentification
    if( submit.parentNode == authenticationForm ) {
        let validInfo = false ;

        for( let i = 0 ; i < users.length ; i++ ) {
            if( inputs[0].value == users[i].userName && inputs[1].value == users[i].password ) {
                validInfo = true;
                break;
            }
        }

        if( validInfo )
            authenticationForm.submit();
        else
            invalidMsg.style.opacity = 1;
    
    }

    // Formulaire d'inscription
    else if( submit.parentNode == inscriptionForm ) {
        // vérifier si les entrées ne sont pas nulles
        let nonNull = true;
        for( let i = 0 ; i < inputs.length  ; i++ ) {
            if( inputs[i].value == "" ) {
                nonNull = false;
                break;
            }
        }

        if( nonNull ) {
            // vérifier si un utilisateur existe
            let existsUser = false ;
            for( let i = 0 ; i < users.length ; i++ ) {
                if( inputs[6].value == users[i].userName ) {
                    existsUser = true;
                    break;
                }
            }
            
            // valider les informations saisies par l'utilisateur
            if( !inputs[0].value.match("^[a-zA-Z]+$") ) {
                invalidMsg.innerHTML = "Ce le nom est invalid";
                invalidMsg.style.opacity = 1;
            } 
            else if( !inputs[1].value.match("^[a-zA-Z]+$") ) {
                invalidMsg.innerHTML = "Ce le prenom est invalid";
                invalidMsg.style.opacity = 1;
            } 
            else if( inputs[2].value.length !== 10 ) {
                invalidMsg.innerHTML = "Date de naissance incorrect";
                invalidMsg.style.opacity = 1;
            } 
            else if( !inputs[3].value.match("^[a-zA-Z0-9]+$") ) {
                invalidMsg.innerHTML = "Cette adresse est invalid";
                invalidMsg.style.opacity = 1;
            } 
            else if( !inputs[4].value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ) {
                invalidMsg.innerHTML = "Cette email est invalid";
                invalidMsg.style.opacity = 1;
            } 
            else if( !validatePhoneNumber() ) {
                invalidMsg.innerHTML = "Cette Numero de téléphone est invalid";
                invalidMsg.style.opacity = 1;
            } 
            else if( inputs[7].value.length > 8 || inputs[7].value.length < 4 ) {
                invalidMsg.innerHTML = "Choisissez un mot de passe pour minimum 4 caractères et maximum 8 caractères";
                invalidMsg.style.opacity = 1;
            } 
            else if( inputs[6].value.length > 20 || inputs[6].value.length < 4 ) {
                invalidMsg.innerHTML = "Choisissez un nom d'utilisateur pour minimum 4 caractères et maximum 20 caractères";
                invalidMsg.style.opacity = 1;
            } 
            else if( existsUser ) {
                invalidMsg.innerHTML = "Ce nom d'utilisateur existe déjà";
                invalidMsg.style.opacity = 1;
            } else {
                users.push(
                    inputs[0].value,
                    inputs[1].value,
                    inputs[2].value,
                    inputs[3].value,
                    inputs[4].value,
                    inputs[5].value,
                    inputs[6].value,
                    inputs[7].value
                )
                
                inscriptionForm.submit(); 
            }
        } else {
            invalidMsg.innerHTML = "Il faut remplir tout les champ";
            invalidMsg.style.opacity = 1;
        }
    }
};

function validatePhoneNumber() {
    let valid = true ;

    if( !inputs[5].value.match(/[0-9]/i) || inputs[5].value.length !== 10 ) 
        valid = false;
    else 
        if( !inputs[5].value.startsWith("05") && !inputs[5].value.startsWith("06") && !inputs[5].value.startsWith("07") ) 
            valid = false ;
    
    return valid;
}