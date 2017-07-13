/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  let handTotal = 0 //initialize a hand total of 0, pre reception of cards
  hand.forEach(function(card) {
    //Go through array one element at a time. Card is variable for each element
    if (card === 'J' || card === 'Q' || card === 'K') {
      //If card is face card add 10 to the current total
      handTotal += 10
    }

    if (card != 'A' && card != 'K' && card != 'Q' && card != 'J') {
      //If card is not face card or Ace add number of card to total
      handTotal += Number(card)
    }

    if (card === 'A') {
      //If card is Ace & if hand total is less than/equal to 10 ace can be 11, else ace is 1
      if (handTotal <= 10) {
        handTotal += 11
      } else {
        handTotal += 1
      }
    }

    if (handTotal > 21 && hand.includes('A')) {
      //If Hand is over 21 and it has an ace, force ace to be 1 by subtracting 10
      handTotal -= 10
    }
  })
  console.log(handTotal)
  return handTotal
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
