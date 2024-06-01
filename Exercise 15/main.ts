//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

let guess_list: string[]=['Farhan','Sehrish','Iqra'];
for(let i=0;i<guess_list.length;i++){
    console.log('Respected Sir/Madam ' + guess_list[i]+ ',\ni invited you for dinner.\nThank you\n')
}
let not_present: string = 'Sehrish'
let new_guesst: string = 'Danish'
guess_list[1]=new_guesst;
for(let i=0; i <guess_list.length;i++ ){
    console.log('Respected Sir/Madam ' + guess_list[i]+ ',\n i invited you for dinner.\nThank you\n')
}
console.log(`Mr/Mrs.${not_present} will not coming at dinner.`)

