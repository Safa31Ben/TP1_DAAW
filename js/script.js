
//  tableau d'utilisateurs
let users = [
  {
      firstName: "Soheib",
      lastName: "DAOUDI",
      birthday: "17-02-2001",
      adress: "Constantine",
      email: "soheib@gmail.com",
      phoneNum: "0600000000",
      userName: "Soheib",
      password: "aqwzsx"
  },
  {
      firstName: "Safa",
      lastName: "BENABDESSADOK",
      birthday: "01-01-1999",
      adress: "Touggourt",
      email: "safa@gmail.com",
      phoneNum: "0500000000",
      userName: "safsaf",
      password: "azerty"
  }, 
  {
      firstName: "Ali",
      lastName: "SELLAMI",
      birthday: "10-05-2002",
      adress: "Constantine",
      email: "Ali@gmail.com",
      phoneNum: "0700000000",
      userName: "AliAli",
      password: "edcrfv"
  },
  {
      firstName: "Omar",
      lastName: "FAROUK",
      birthday: "14-07-2001",
      adress: "Algier",
      email: "Omar@gmail.com",
      phoneNum: "0660000000",
      userName: "Omar",
      password: "tgbyhn"
  }
]; 


// Login 
function loginScript() {
  localStorage.setItem("users", JSON.stringify(users) );

  let authenticationForm = document.getElementById("authenticationForm");
  let inscriptionForm = document.getElementById("inscriptionForm");
  let inputs = document.querySelectorAll('.inputs');
  let submit = document.querySelector('.submit');
  let invalidMsg = document.querySelector('.invalid');
  let successRegistration = document.querySelector('.successRegistration');
  let OKbutton = document.querySelector('.successRegistration button');

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
        else if( !inputs[5].value.startsWith("05") && !inputs[5].value.startsWith("06") && !inputs[5].value.startsWith("07") ) {
          invalidMsg.innerHTML = "Cette Numero de téléphone est invalid";
          invalidMsg.style.opacity = 1;
        } 
        else if( !inputs[5].value.match(/[0-9]/i) || inputs[5].value.length !== 10 )  {
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
          users.push({
            firstName: inputs[0].value,
            lastName: inputs[1].value,
            birthday: inputs[2].value,
            adress: inputs[3].value,
            email: inputs[4].value,
            phoneNum: inputs[5].value,
            userName: inputs[6].value,
            password: inputs[7].value
          });
          localStorage.setItem("users", JSON.stringify(users) );
          successRegistration.style.display = "flex";
        }
      } else {
        invalidMsg.innerHTML = "Il faut remplir tout les champ";
        invalidMsg.style.opacity = 1;
      }

      OKbutton.onclick = () => {
        inscriptionForm.submit();
      }
    }
  };
}

// accuiel
function acuiel(){
  $(document).ready(function() {
    users = JSON.parse( localStorage.getItem("users"));

    var p1 = document.getElementById('myHtml1').innerHTML;
    var p2 = document.getElementById('myHtml2').innerHTML; 
    var p3 = document.getElementById('myHtml3').innerHTML; 
    var p4 = document.getElementById('myHtml4').innerHTML; 
  
    $("#one").click(function() {  
        $(".container-right").html(p1);
        afficheUserList();  
    });  
    $("#two").click(function() {  
        $(".container-right").html(p2);
    });  
    $("#three").click(function() {  
        $(".container-right").html(p3);  
    });  
    $("#four").click(function() {  
        $(".container-right").html(p4);  
    });
    setUserInfo();  
  });
}

function afficheUserList() {
  let table = document.querySelector(".table");

  let oldtable_content = document.querySelectorAll(".table-content");
  if(oldtable_content != null){
    for(let i = 0 ; i < oldtable_content.length ; i++){
      oldtable_content[i].remove();
    }
  }

  for(let i = 0 ; i < users.length ; i++){
    let table_content = document.createElement("div");
    table_content.setAttribute("class","table-content");

    let table_row = document.createElement("div");
    table_row.setAttribute("class","table-row");

    let table_data1 = document.createElement("div");
    table_data1.setAttribute("class","table-data");
    table_data1.innerHTML = users[i].userName;

    let table_data2 = document.createElement("div");
    table_data1.setAttribute("class","table-data");
    table_data2.innerHTML = users[i].firstName;

    let table_data3 = document.createElement("div");
    table_data3.setAttribute("class","table-data");
    table_data3.innerHTML = users[i].lastName;

    let table_data4 = document.createElement("div");
    table_data4.setAttribute("class","table-data");
    table_data4.innerHTML = users[i].birthday;

    let table_data5 = document.createElement("div");
    table_data5.setAttribute("class","table-data");
    table_data5.innerHTML = users[i].adress;

    let table_data6 = document.createElement("div");
    table_data6.setAttribute("class","table-data");
    table_data6.innerHTML = users[i].email;

    let table_data7 = document.createElement("div");
    table_data7.setAttribute("class","table-data");
    table_data7.innerHTML = users[i].phoneNum;

    table_row.appendChild(table_data1);
    table_row.appendChild(table_data2);
    table_row.appendChild(table_data3);
    table_row.appendChild(table_data4);
    table_row.appendChild(table_data5);
    table_row.appendChild(table_data6);
    table_row.appendChild(table_data7);

    table_content.appendChild(table_row);
    table.appendChild(table_content);
  }
}

function ajourUser() {
  let inputs = document.querySelectorAll(".html2Inputs");
  
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
          document.getElementById("message2").innerHTML = "Ce le nom est invalid";
        } 
        else if( !inputs[1].value.match("^[a-zA-Z]+$") ) {
          document.getElementById("message2").innerHTML = "Ce le prenom est invalid";
        } 
        else if( inputs[2].value.length !== 10 ) {
          document.getElementById("message2").innerHTML = "Date de naissance incorrect";
        } 
        else if( !inputs[3].value.match("^[a-zA-Z0-9]+$") ) {
          document.getElementById("message2").innerHTML = "Cette adresse est invalid";
          
        } 
        else if( !inputs[4].value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ) {
          document.getElementById("message2").innerHTML = "Cette email est invalid";
          
        } 
        else if( !inputs[5].value.startsWith("05") && !inputs[5].value.startsWith("06") && !inputs[5].value.startsWith("07") ) {
          document.getElementById("message3").innerHTML = "Cette Numero de téléphone est invalid";
        } 
        else if( !inputs[5].value.match(/[0-9]/i) || inputs[5].value.length !== 10 )  {
          document.getElementById("message3").innerHTML = "Cette Numero de téléphone est invalid";
        } 
        else if( inputs[7].value.length > 8 || inputs[7].value.length < 4 ) {
          document.getElementById("message2").innerHTML = "Choisissez un mot de passe pour minimum 4 caractères et maximum 8 caractères";
          
        } 
        else if( inputs[6].value.length > 20 || inputs[6].value.length < 4 ) {
          document.getElementById("message2").innerHTML =  "Choisissez un nom d'utilisateur pour minimum 4 caractères et maximum 20 caractères";
          
        } 
        else if( existsUser ) {
          document.getElementById("message2").innerHTML = "Ce nom d'utilisateur existe déjà";
      
        } else {
          users.push({
            firstName: inputs[0].value,
            lastName: inputs[1].value,
            birthday: inputs[2].value,
            adress: inputs[3].value,
            email: inputs[4].value,
            phoneNum: inputs[5].value,
            userName: inputs[6].value,
            password: inputs[7].value
          });
          localStorage.setItem("users", JSON.stringify(users) );
          document.getElementById("message2").innerHTML = "Utilisateur ajouté avec succès"; 
        }
    } else {
      document.getElementById("message2").innerHTML = "Il faut remplir tout les champ";
    }
}

let i = 0;
function trouver(){
  let uname =  document.getElementById("uname3");
  for(i = 0 ; i < users.length ; i++){
    if(uname.value == users[i].userName)
      break;
  }

  if(i != users.length ){
    let inputs = document.querySelectorAll(".html3Inputs");
    inputs[0].setAttribute("value",`${users[i].firstName}`);
    inputs[1].setAttribute("value",`${users[i].lastName}`);
    inputs[2].setAttribute("value",`${users[i].birthday}`);
    inputs[3].setAttribute("value",`${users[i].adress}`);
    inputs[4].setAttribute("value",`${users[i].email}`);
    inputs[5].setAttribute("value",`${users[i].phoneNum}`);
    inputs[6].setAttribute("value",`${users[i].password}`);
    document.getElementById("message3").innerHTML = "";
  }else{
    document.getElementById("message3").innerHTML = "Utilisateur non trouvé";
  }
}
function update(){
  if( i != users.length) {
    let inputs = document.querySelectorAll(".html3Inputs");
    let nonNull = true;
    for( let i = 0 ; i < inputs.length  ; i++ ) {
      if( inputs[i].value == "" ) {
        nonNull = false;
        break;
      }
    }
    if( nonNull ) {
      if( !inputs[3].value.match("^[a-zA-Z0-9]+$") ) {
        document.getElementById("message3").innerHTML = "Cette adresse est invalid";  
      } 
      else if( !inputs[4].value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ) {
        document.getElementById("message3").innerHTML = "Cette email est invalid";
      } 
      else if( !inputs[5].value.startsWith("05") && !inputs[5].value.startsWith("06") && !inputs[5].value.startsWith("07") ) {
        document.getElementById("message3").innerHTML = "Cette Numero de téléphone est invalid";
      } 
      else if( !inputs[5].value.match(/[0-9]/i) || inputs[5].value.length !== 10 )  {
        document.getElementById("message3").innerHTML = "Cette Numero de téléphone est invalid";
      } 
      else if( inputs[6].value.length > 8 || inputs[6].value.length < 4 ) {
        document.getElementById("message3").innerHTML = "Choisissez un mot de passe pour minimum 4 caractères et maximum 8 caractères";
      } 
      else {
        users[i].adress = inputs[3].value; 
        users[i].email = inputs[4].value; 
        users[i].phoneNum = inputs[5].value; 
        users[i].password = inputs[6].value; 
        document.getElementById("message3").innerHTML = "Les information de l'utilisateur ont été modifiées";
      }
      localStorage.setItem("users", JSON.stringify(users) );
    } else {
      document.getElementById("message3").innerHTML = "Il faut remplir tout les champ";
    }
  }else{
    document.getElementById("message3").innerHTML = "Utilisateur non trouvé";
  }
}

let j = 0;
function trouverS(){
  let uname =  document.getElementById("uname4");
  for(j = 0 ; j < users.length ; j++){
    if(uname.value == users[j].userName)
      break;
  }

  if(j != users.length ) {
    let inputs = document.querySelectorAll(".td4");
    inputs[0].innerHTML = `${users[j].firstName}`;
    inputs[1].innerHTML = `${users[j].lastName}`;
    inputs[2].innerHTML = `${users[j].birthday}`;
    inputs[3].innerHTML = `${users[j].adress}`;
    inputs[4].innerHTML = `${users[j].email}`;
    inputs[5].innerHTML = `${users[j].phoneNum}`;
    document.getElementById("message4").innerHTML = "";
  } else {
    document.getElementById("message4").innerHTML = "Utilisateur non trouvé";
  }
}
function supprimer() {
  if( j != users.length) {
    users.splice(i,1);
    document.getElementById("message4").innerHTML = "Utilisateur Supprimé";
  } else {
    document.getElementById("message4").innerHTML = "Utilisateur non trouvé";
  }
}

function setUserInfo() {
  
  users = JSON.parse( localStorage.getItem("users"));

  let url = window.location.href; 
  url = url.slice(url.indexOf("?") + 1);
  let infos = url.split("&");
  let user_info = document.getElementById("user_info");
  let i ;
  for(i = 0 ; i < infos.length ; i++){
    let infod = infos[i].split("=");
    if(infod[0] == "userName"){
      break;
    }
  }
  let j ;
  let infod = infos[i].split("=");
  for( j = 0 ; j < users.length ; j++){
    console.log(users[j]);
    if(users[j].userName == infod[1] ){
      break;
    }
  }
  user_info.innerHTML = `${users[j].firstName} <br> ${users[j].lastName}` ;
}
