$(document).ready(function()  
{
    var p1 = document.getElementById('myHtml1').innerHTML;
     var p2 = document.getElementById('myHtml2').innerHTML; 
     var p3 = document.getElementById('myHtml3').innerHTML; 
     var p4 = document.getElementById('myHtml4').innerHTML; 
  
     $("#one").click(function()  
     {  
         $(".container-right").html(p1);  
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
 });
 document.getElementById("ID1").innerHTML =input[8].value;
 document.getElementById("fname1").innerHTML =input[1].value;
 document.getElementById("sname1").innerHTML =input[2].value;
 document.getElementById("daten1").innerHTML =input[3].value;
 document.getElementById("sexe1").innerHTML =input[4].value;
 document.getElementById("dpt1").innerHTML =input[5].value;
 document.getElementById("year1").innerHTML =input[6].value;


 (function() {
   input1 = document.getElementById("fnamev");
   input2 = document.getElementById("snamev");
   input3 = document.getElementById("sexev");
   input4 = document.getElementById("datenv");
   input5 = document.getElementById("numnv");
   input6 = document.getElementById("natv");
   input7 = document.getElementById("dptv");
   input8 = document.getElementById("bacv");
   input9 = document.getElementById("anbacv");
   input10 = document.getElementById("filv");


   input=[input1,input2,input3,input4,input5,input6,input7,input8,input9,input10];

            
            for(let i=0;i<11;i++){
              if (localStorage && input[i] in localStorage) {
      input[i].value = localStorage.input[i]
    }
            }
   
          
    document.getElementById("setValue").onclick = function () {
      for(let i=0;i<11;i++){
      localStorage && (localStorage.theValue[i] = input[i].value);
      console.log(input[i].value);}
    };
    
  })();

 
 
 