// C to F =  (num * 9/5) + 32;
// C to K = num + 273.15;
// F to C = (num - 32) * 5/9;
// F to K = (num - 32) * 5/9 + 273.15;
// K to C = num - 273.15;
// K to F = (num - 273.15) * 9/5 + 32;


function main(){

  var resp = document.getElementById("resp");
  var num = document.getElementById("num").value;
  
  if(document.getElementById("num").checked == null){
     resp.innerHTML = "Favor, inserir um número!!!";
     }
  if(document.getElementById("temp_origemC").checked === true){
    if(document.getElementById("temp_destinoC").checked === true){
      resp.innerHTML = num + " Cº";
    }else if(document.getElementById("temp_destinoF").checked === true){
      resp.innerHTML = (num * 9/5) + 32 + " Fº";
    }else if(document.getElementById("temp_destinoK").checked === true){
      resp.innerHTML = num + 273.15 + " Kº";
    }    
  }else{    
    if(document.getElementById("temp_origemF").checked === true){
        if(document.getElementById("temp_destinoC").checked === true){
          resp.innerHTML = (num - 32) * 5/9 + " Cº";
        }
      else if(document.getElementById("temp_destinoK").checked === true){
        resp.innerHTML = (num - 32) * 5/9 + 273.15 + " Kº";
      }
      else if(document.getElementById("temp_destinoF").checked === true){
        resp.innerHTML = num + " Fº";
      }
    }else{
      if(document.getElementById("temp_origemK").checked === true){
        if(document.getElementById("temp_destinoK").checked === true){
          resp.innerHTML = num + " Kº";
        }else if(document.getElementById("temp_destinoC").checked === true){
          resp.innerHTML = num - 273.15 + " C°";
        }
        else if(document.getElementById("temp_destinoF").checked === true){
          resp.innerHTML = (num - 273.15) * 9/5 + 32 + " Fº";
        }
      }
    }
  }
  
}