"use strict";
//You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guess_list = ['Farhan', 'Sehrish', 'Iqra'];
//for(let i=0;i<guess_list.length;i++){
// console.log('Respected Sir/Madam ' + guess_list[i]+ ',\ni invited you for dinner.\nThank you\n')
//}
let not_present = 'Sehrish';
let new_guesst = 'Danish';
guess_list[1] = new_guesst;
for (let i = 0; i < guess_list.length; i++) {
    console.log('Respected Sir/Madam ' + guess_list[i] + ',\n i invited you for dinner.\nThank you\n');
    console.log(`Mr/Mrs.${not_present} will not coming at dinner.`);
}
guess_list.unshift('Zain', 'Abrish', 'Zara');
for (let i = 0; i < guess_list.length; i++) {
    console.log('Respected Sir/Madam ' + guess_list[i] + ',\n i invited you for dinner.we foung a big table so we decided to invite more guest.\nThank you\n');
}
