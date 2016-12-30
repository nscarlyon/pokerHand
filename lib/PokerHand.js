function findHandRank(hand) {
  cards = sortMapCards(hand);
  return rank();
}

function sortMapCards(hand) {
  var sortedCards = hand.split(" ").sort()
  return sortedCards.map(function(card) {
    if(card[0] === "1") {
      return {number: card[0] + card[1], suit: card[2]}
    } else {
      return {number: card[0], suit: card[1]}
    }
  })
}

function rank() {
  if(isRoyal() && isFlush()) {
    return "Royal Flush";
  } else if(isStraight() && isFlush()) {
    return "Straight Flush";
  } else if(isFourOfAKind()) {
    return "Four of a Kind"
  } else if(isFullHouse()) {
    return "Full House"
  } else if(isFlush()) {
    return "Flush"
  } else if(isStraight()) {
    return "Straight"
  } else if(isThreeOfAKind()) {
    return "Three of a Kind"
  } else if(isTwoPairs()) {
    return "Two Pairs"
  } else if(isPair()) {
    return "Pair"
  } else {
    return "High Card: " + highestCard()
  }
}

function isRoyal() {
  var royalFlush = ["10", "a", "j", "k", "q"];
  var isRoyal = true;

  cards.forEach(function(card, index) {
    if(card.number != royalFlush[index]) {
      isRoyal = false;
    }
  })

  return isRoyal
}

function isFlush() {
 return suitFrequencies().length == 1;
}

function suitFrequencies() {
  var suitFrequencies = [];
  var prev;

  cards.forEach(function(card) {
    if(card.suit === prev) {
      suitFrequencies[suitFrequencies.length - 1]++;
      prev = card.suit;
    } else {
      prev = card.suit;
      suitFrequencies.push(1);
    }
  })

  return suitFrequencies;
}

  function isStraight() {
    var straights = [["2", "3", "4", "5", "a"], ["2", "3", "4", "5", "6"], ["3", "4", "5", "6", "7"], ["4", "5", "6", "7", "8"],
    ["5", "6", "7", "8", "9"], ["10", "6", "7", "8", "9"], ["10", "7", "8", "9", "j"], ["10", "8", "9", "j", "q"],
    ["10", "9", "j", "k", "q"], ["10", "a", "j", "k", "q"]]

    if(numberFrequencies().length == 5) {
      return findStraight(straights);
    }
  }

  function findStraight(straights) {
    var isStraight = false;

    straights.forEach(function(straight) {
      if(cardsAreStraight(straight)) {
        isStraight = true;
      }
    })

    return isStraight
  }

  function cardsAreStraight(straight) {
    return cards[0].number == straight[0] && cards[1].number == straight[1] && cards[2].number == straight[2] &&
      cards[3].number == straight[3] && cards[4].number == straight[4]
  }

  function numberFrequencies() {
    var numberFrequencies = [];
    var prev;

    cards.forEach(function(card) {
      if(card.number === prev) {
        numberFrequencies[numberFrequencies.length - 1]++;
        prev = card.number;
      } else {
        prev = card.number;
        numberFrequencies.push(1);
      }
    })

    return numberFrequencies;
  }

  function isFourOfAKind() {
    return numberFrequencies().includes(4);
  }

  function isFullHouse() {
    return numberFrequencies().includes(3) && numberFrequencies().includes(2);
  }

  function isThreeOfAKind() {
    return numberFrequencies().includes(3);
  }

  function isTwoPairs() {
    return numberFrequencies().length == 3;
  }

  function isPair() {
    return numberFrequencies().length == 4
  }

  function highestCard() {
    var faceValues = {"a": 0, "j": 11, "q": 12, "k": 13}

    var highestCard = cards.reduce(function(card1, card2) {
      if(card1.number > 0 == false && card2.number > 0 == false) {
        return Math.max(faceValues[card1.number] || card1, faceValues[card2.number])
      } else if(card1.number > 0 == false) {
        return Math.max(faceValues[card1.number] || card1, Number(card2.number))
      } else if(card2.number > 0 == false) {
        return Math.max(Number(card1.number || card1), faceValues[card2.number])
      } else {
        return Math.max(Number(card1.number || card1), Number(card2.number))
      }
    })

    if(highestCard == 11) return "j";
    if(highestCard == 12) return "q";
    if(highestCard == 13) return "k";
    return highestCard;
  }
