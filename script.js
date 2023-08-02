var waktu = [2, 2, 3, 3, 1, 4, 5];
const batasWaktu = 2;
let totalWaktuBermain = 0;
let melebihiBatas = 0;

for(let i=0; i<waktu.length; i++){
  totalWaktuBermain+=
  waktu[i];
  if(waktu[i]>batasWaktu){
    melebihiBatas++;
  }
}
console.log('Total Waktu Bermain : ' + totalWaktuBermain + ' Jam')
console.log('Melebihi Waktu Bermain : ' + melebihiBatas + ' Kali')