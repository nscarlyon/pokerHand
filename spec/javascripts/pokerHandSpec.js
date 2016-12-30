describe("PokerHand", function() {

  it("returns a royal flush when the hand contains A-K-J-Q-10 and they all share the same suit", function() {
    expect(findHandRank("qh ah 10h kh jh")).toEqual("Royal Flush");
  })

  it("does not return a royal flush if it is not a flush", function() {
    expect(findHandRank("qd ac 10h kd js")).not.toEqual("Royal Flush");
  })

  it("returns a straight flush when the hand contains a straight and the same suit", function() {
    expect(findHandRank("2h 3h 4h 5h 6h")).toEqual("Straight Flush");
  })

  it("returns a straight flush with an ace", function() {
    expect(findHandRank("2h 5h ah 4h 3h")).toEqual("Straight Flush");
  })

  it("returns a straight flush with a 10", function() {
    expect(findHandRank("6h 8h 10h 9h 7h")).toEqual("Straight Flush");
  })

  it("returns a straight flush with a j", function() {
    expect(findHandRank("7h jh 9h 10h 8h")).toEqual("Straight Flush");
  })

  it("returns four of a kind for a hand with four of the same number", function() {
    expect(findHandRank("2d 2h 2s 7d 2c")).toEqual("Four of a Kind")
  });

  it("returns four of a kind even when all the cards share the same suit", function() {
    expect(findHandRank("2d 2d 2d 7d 2d")).toEqual("Four of a Kind")
  });

  it("returns four of a kind for face cards", function() {
    expect(findHandRank("kd 2d kc ks kh")).toEqual("Four of a Kind")
  });

  it("returns Full House when there is a pair and three of a kind", function() {
    expect(findHandRank("5h 3s 5s 3d 3c")).toEqual("Full House")
  });

  it("returns Full House even when all the cards share the same suit", function() {
    expect(findHandRank("5s 3s 5s 3s 3s")).toEqual("Full House")
  });

  it("returns Full House for face cards", function() {
    expect(findHandRank("js as jd ad jc")).toEqual("Full House")
  });

  it("returns Flush when all the cards have the same suit but are not in sequence", function() {
    expect(findHandRank("2h 4h ah 9h 6h")).toEqual("Flush");
  })

  it("returns Flush when it includes 10", function() {
    expect(findHandRank("2h 4h ah 9h 10h")).toEqual("Flush");
  })

  it("returns straight for a hand out of order", function() {
    expect(findHandRank("5d 4h 3s 6d 2c")).toEqual("Straight")
  });

  it("returns straight with a low ace", function() {
    expect(findHandRank("4d ah 5s 2d 3c")).toEqual("Straight")
  })

  it("returns straight for a sequence ending with 10", function() {
    expect(findHandRank("9d 6h 7s 10d 8c")).toEqual("Straight")
  });

  it("returns straight for the highest ranking straight", function() {
    expect(findHandRank("qd 10h js kd ac")).toEqual("Straight")
  });

  it("returns three of a kind for a hand with three of the same number", function() {
    expect(findHandRank("2d 7h 2s 3d 2c")).toEqual("Three of a Kind")
  });

  it("returns three of a kind for a hand with three of the same number", function() {
    expect(findHandRank("2d 7h 2s 3d 2c")).toEqual("Three of a Kind")
  });

  it("returns two pairs when there are multiple pairs", function() {
    expect(findHandRank("2d 2h 6s 6c 4s")).toEqual("Two Pairs");
  });

  it("does not return pair when there are multiple pairs", function() {
    expect(findHandRank("2d 2h 6s 6s 4s")).not.toEqual("Pair");
  });

  it("to return a pair when they are not near each other", function() {
    expect(findHandRank("2d 3h 4s 9s 2s")).toEqual("Pair");
  });

  it("returns a pair when they are face cards", function() {
    expect(findHandRank("ad 4h as 9s 8s")).toEqual("Pair");
  });

  it("returns Highest card value, when the hand is no other rank", function() {
    expect(findHandRank("2d 3h 9s 5d 6c")).toEqual("High Card: 9")
  });

  it("returns Highest card value, when it is a face card", function() {
    expect(findHandRank("2d 3h 9s jd 6c")).toEqual("High Card: j")
  });

});
