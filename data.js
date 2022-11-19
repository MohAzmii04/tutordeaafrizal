const nama = "mohammad azmi";
let usia = 187;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if ( usia >10 && usia <18) {
        generasi = "genarasi remaja";
    } 
      else if  ( usia >=18 && usia <30) {
        generasi = "genarasi dewasa";
    }
     else if ( usia >=30){
        generasi = "genarasi tua";
    }
      else if (usia >2 && usia <10) {
        generasi = "genarasi anak-anak";
    }
    else {
        generasi = "masih bayi gausahh tolollll";
    }
    return biodata.innerHTML = generasi;
}
console.log(nama)
console.log(usia)

generateBiodata();