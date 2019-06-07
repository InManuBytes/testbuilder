// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  let cardNumberInt = parseInt(cardNumber);

  //Diner's club starts with 38 or 39 and is 14 digits long
  let dinersClub = /^3[89]\d{12}$/;
  //American Express starts with 34 or 37 and is 15 digits long
  let americanExp = /^3[47]\d{13}$/;
  //Visa starts with a 4 and is 13, 16, 19 digits long
  let visa = /^4(\d{12}$|\d{15}$|\d{18}$)/;
  //MasterCard starts with 51, 52, 53, 54, 55 and is 16 digits long
  let masterCard = /^5[1-5]\d{14}$/;
  //Discover starts with 6011, 644-649, or 65, and a length of 16 or 19
  let discover = /(^6011(\d{12}|\d{15})$)|(^64[4-9](\d{13}|\d{16})$)|(^65(\d{14}|\d{17})$)/
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  let maestro = /(^50(18|20|38)|^6304)\d{8,15}$/;
  if (dinersClub.test(cardNumberInt)){
        return 'Diner\'s Club';
  } else if (americanExp.test(cardNumberInt)){
        return 'American Express';
  } else if (visa.test(cardNumber)){
      return 'Visa';
  } else if (masterCard.test(cardNumber)){
      return 'MasterCard';
  } else if (discover.test(cardNumber)){
      return 'Discover';
  } else if (maestro.test(cardNumber)){
      return 'Maestro';
  }
};