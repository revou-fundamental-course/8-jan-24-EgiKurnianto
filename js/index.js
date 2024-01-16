let sisi = document.getElementById("sisi").value;


function hitungLuas() {

    sisi = parseInt ( document.getElementById ( "sisi" ) .value ) ;
    luas = sisi*sisi; //Persamaan Luas keliling persegi
    document.getElementById ( "txtLuas" ) .innerHTML= "Luas persegi adalah : "+luas;
}

function hitungKeliling() {
    sisi = parseInt ( document.getElementById ( "sisi" ) .value ) ;
    keliling = 4*sisi; //Persamaan Luas keliling persegi
    document.getElementById ( "txtKeliling" ) .innerHTML= "Keliling persegi adalah : "+keliling;
}

function reset() {
    document.getElementById('container').value = ''
  }