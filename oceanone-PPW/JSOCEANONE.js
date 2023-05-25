function takeAction(){
  window.alert("YEEEEEY");
}

function tampil() {
  var nama = document.getElementById("name").value
  var email = document.getElementById("email").value
  var message = document.getElementById("message").value
  document.getElementById("thanks").innerHTML="<b>Thank for your response. Your data recorded as :</b>"
  document.getElementById("myname").innerHTML="Hello, my name is " + "<b>" + nama + "</b>"
  document.getElementById("contactme").innerHTML="Please contact me through : " + "<b>" + email + "</b>"
  document.getElementById("saysomething").innerHTML="I want to say about : " + "<br>" + "<b>" + message + "</b>"
}



function calculate365() {
  var hari = 365;
  var botolplastik = parseInt(document.getElementById("botolplastik").value)
  var sedotan = parseInt(document.getElementById("sedotan").value)
  var rokok = parseInt(document.getElementById("rokok").value)

  var hasil = (botolplastik+sedotan+rokok)*hari;
  document.getElementById("hasil").innerHTML="Jumlah sampah plastik per tahunnya " + "<b>" + hasil + "</b>"


}


var counter = 0; // Variabel untuk menghitung jumlah input field yang dibuat

// dipake untuk get nama item yang nantinya jadi label 
function tambahInputFielduntukItemAPA() {
  counter++; // Menambah jumlah input field
  
  var inputBaru = document.createElement("input");
  inputBaru.type = "text";
  inputBaru.id = "input" + counter; // Memberikan id unik pada setiap input field

  var buttonBaru = document.createElement("button");
  buttonBaru.type = "text"; 
  buttonBaru.id = "buttonSAVE" + counter; 
  
  var container = document.getElementById("detailInputItemApa");
  container.appendChild(inputBaru);
  container.appendChild(buttonBaru); 
  // buttonBaru adalah button untuk SAVE nilai inputan
}

// save button untuk menggambil inputan yang digunakan sebaga label 
function ambilNilaiInputItemAPA(){

}






// var nilaiInput = [];
// function ambilNilaiInput() {
//   for (var i = 1; i <= counter; i++) {
//     var input = document.getElementById("input" + i);
//     nilaiInput.push(input.value);
//   }
//   console.log(nilaiInput);
//   // document.write(nilaiInput);
// }

// function calculate360(){
//   for()
// }

// function calculate360(){
//   var hasil360; 
//   for(var i=1; i <= counter; i++){

//   }
// }







