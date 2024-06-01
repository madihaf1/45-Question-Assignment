let guess_list: string[]=['Farhan','Sehrish','Iqra'];
//for(let i=0;i<guess_list.length;i++){
   // console.log('Respected Sir/Madam ' + guess_list[i]+ ',\ni invited you for dinner.\nThank you\n')
//}







let not_present: string = 'Sehrish'
let new_guesst: string = 'Danish'
guess_list[1]=new_guesst;
//for(let i=0; i <guess_list.length;i++ ){
    //console.log('Respected Sir/Madam ' + guess_list[i]+ ',\n i invited you for dinner.\nThank you\n')
    //console.log(`Mr/Mrs.${not_present} will not coming at dinner.`)
//}

guess_list.unshift('Zain','Abrish','Zara');
//for(let i=0;i < guess_list.length;i++){
    //console.log('Respected Sir/Madam ' + guess_list[i]+ ',\n i invited you for dinner.we foung a big table so we decided to invite more guest.\nThank you\n')
//}

console.log(`\nUnfortunately we have not found table on time , only two people allow`);
while(guess_list.length>2){
    let remove_guest=guess_list.pop();
    console.log(`Sorry Sir/Madam,${remove_guest},'\n you are not invited for dinner.\n`)
}
for(let i=0; i<guess_list.length; i++){
    console.log('Respected Sir/Madam ' + guess_list[i]+ ',\nyes you are still invited for dinner.\nthank you\n')
}
guess_list.splice(0,2);
     console.log(guess_list)
