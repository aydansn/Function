const cagir = () => {
    console.log( "Hello World");
}
cagir();


const cemiTap = (num1,num2) => {
  const sum = num1 + num2;
  console.log(sum);
}
cemiTap(5,7);

function kvadratiTap (number1,number2){
    const kvadrati = Math.pow(number1,number2);
    return kvadrati;
}
console.log(kvadratiTap(5,2));
console.log(kvadratiTap(3,2));
console.log(kvadratiTap(7,2));

function kokaltiTap (numbers){
    const kokalti = Math.sqrt(numbers);
    return kokalti;
}
console.log(kokaltiTap(16));

function salamla(ad) {
    return `Salam, ${ad}`;
}
console.log(salamla("Aydan")); 

const tekVeyaCut = (numbers) => {
    if(numbers%2===0){
       return "cutdur";
    }
    else{
        return "tekdir";
    }
}
console.log(tekVeyaCut(7));
console.log(tekVeyaCut(6));


let reqemler = [1, 2, 3, 4, 5];
function elementVarMi(array, element) {
    return array.includes(element);
}
console.log(elementVarMi(reqemler, 3)); 
console.log(elementVarMi(reqemler, 6)); 



let arr1 = [1, 5, 3, 9, 2];
function enBuyukElement(array) {
    let max = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; 
        }
    }
    return max; 
}
console.log(enBuyukElement(arr1)); 

const tersArray =(names)=>{
    const isimler = names.reverse();
    return isimler;
}
console.log(tersArray( ["Aydan", "Gunay", "Nargiz"]));
console.log(tersArray( [1,2,3,4,5,6,7,8,9]));


const faktoriyel = () => {

}

//Palindrom Yoxlamaq:


function rastgeleSayi(numbers){
    const tesadufi = Math.random(numbers);
    return tesadufi;
}
console.log(rastgeleSayi());


function saatVeDəqiqə(dəqiqə) {
    let saat = Math.floor(dəqiqə / 60); 
    let dəqiqəQalıq = dəqiqə % 60; 

    return saat + " saat " + dəqiqəQalıq + " dəqiqə";
}


console.log(saatVeDəqiqə(90));
console.log(saatVeDəqiqə(150));
console.log(saatVeDəqiqə(45)); 

//Array-dən Unikal Elementlər:

function adlariBuyukHərfləBaslat(array) {
    let yeniArray = array.map(ad => ad.charAt(0).toUpperCase() + ad.slice(1));
    return yeniArray;
}
let adlar = ["aydan", "gulcan","gonul","ferid","eldar"];

console.log(adlariBuyukHərfləBaslat(adlar));

const tamBolunurMu = (reqem1, reqem2) => {
    if(reqem1%reqem2===0){
       return "tam bolunur";
    }
    else{
        return "tam bolunmur";
    }
}
console.log(tamBolunurMu(25,5));
console.log(tamBolunurMu(13,4))

const firstOne = (number)=>{
    if(number%2===0){
        return "cutdur";
    }
    else{
        return "tekdir";
    }
    // function secondTwo (otherNumber) {
    //     if(otherNumber%2===1){
    //         return "cutdur";
    //     }
    //     else{
    //         return "tekdir";
    //     }
    // }
}
console.log(firstOne(4));
//console.log(secondTwo(3))

const birinci = [1,2,3,4,5];
const ikinci = [6,7,8,9,10];
function arrayleriBirləşdir () {
    const birleshdir = birinci.concat(ikinci);
    return birleshdir;
}
console.log(arrayleriBirləşdir(birinci,ikinci));


const silinecek = [1,2,3,4,5];
function elementSil (){
    const silindi = silinecek.splice(silinecek,4);
    return silindi;
}
console.log(elementSil(silinecek));

const reqqaslar = ["Aydan", "Idris", "Fidan", "Zarina",3,4,5,6,7];
const arrayUzunlugu = () => {
    const uzunlugu = reqqaslar.length;
    return uzunlugu;
}
console.log(arrayUzunlugu(reqqaslar));



let arr2 = [0,1, 5, 3, 9, 2];
function enKicikElement(array) {
    let min = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]; 
        }
    }
    return min; 
}
console.log(enKicikElement(arr2)); 