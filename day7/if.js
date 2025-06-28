// let age=18;
// if (age > 18) {
//     console.log('your are  eligible to vote');
// }else if (age === 18) {
//     console.log('you are exactly                                                                                                                                                     18 years old.');
// }else {
//     console.log('you are not eligible to vote');
// }
function checkEligibility(age) {
    if (age > 18) {
        console.log('You are eligible to vote.');
    } else if (age === 18) {
        console.log('You are exactly 18 years old.');
    } else {
        console.log('You are not eligible to vote.');
    }   
}
checkEligibility(20); // You are eligible to vote.
checkEligibility(18); // You are exactly 18 years old.  
checkEligibility(16); // You are not eligible to vote.
