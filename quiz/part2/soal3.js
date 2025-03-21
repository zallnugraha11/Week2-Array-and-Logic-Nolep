



function hitungJumlahKata(kalimat) {
    // you can only write your code here!

    let hitung = 0 ; 
    let dalamKata = false;
    for (let i = 0; i < kalimat.length; i++) {
        
        if (kalimat[i] !== ' ' && dalamKata === false) {
            
            hitung++;
            dalamKata = true;

        } else if(kalimat[i] === ' '){
            dalamKata = false;            
        }

    }
   return hitung;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5