"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guess_list = void 0;
//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guess_list = ['Farhan', 'Sehrish', 'Iqra'];
exports.guess_list = guess_list;
for (let i = 0; i < guess_list.length; i++) {
    console.log('Respected Sir/Madam' + guess_list[i] + ',\ni invited you for dinner.\nThank you');
}
