import { UI } from './ui.js';

$(function() {
  $('select#chooseNum').change(function(e) {
    let theSelectedNum = e.target.value;
    $('#btn1').click(() => {
      UI.clearResult();
      raffleNum(theSelectedNum)
        .then(a => {
          UI.postResult(a);
          console.log(a);
        })
        .catch(err => {
          UI.postResult(err);
          console.log(err);
        });
      return false;
    });
    e.preventDefault();
  });
});

function raffleNum(userNum) {
  return new Promise((resolved, rejected) => {
    UI.postResult(UI.showAnimation());
    let randomNum = Math2.getRundomNum();
    setTimeout(() => {
      console.log(randomNum);
      console.log(userNum);
      if (userNum == randomNum) {
        resolved(UI.promiseResolved(randomNum));
      } else {
        rejected(UI.promiseReject(randomNum));
      }
    }, 5000);
  });
}

class Math2 {
  static getRundomNum() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
  }
}
