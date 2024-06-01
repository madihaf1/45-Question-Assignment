//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guess_list: string[]=['Farhan','Sehrish','Iqra'];
for(let i=0;i<guess_list.length;i++){
    console.log('Respected Sir/Madam' +guess_list[i]+ ',\ni invited you for dinner.\nThank you')
}

export{guess_list}
