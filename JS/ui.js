class UI {
  static postResult(result) {
    $('#result').html(result);
  }
  static clearResult() {
    $('#result').empty();
  }
  static showAnimation() {
    let output = `
    <div class="containerDice">
      <div class="dice">
        <div class="front face">
          <div></div>
        </div>
        <div class="left face">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="right face">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="back face">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="top face">
          <div></div>
          <div></div>
        </div>
        <div class="bottom face">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    `;
    return output;
  }
  
  static promiseResolved(num) {
    let output = `<div class"="alert alert-success" role="alert"">
      <h3 class="alert-heading text-center">OH Yeah!</h3>
        <p class="text-center msg">The winning number is<br><span>${num}!</span><br>
        You Win!!!</p>
      <hr>
    </div>`;
    return output;
  }
  static promiseReject(num) {
    let output = `<div class="alert alert-success" role="alert">
        <h3 class="text-center alert-heading">HO No!</h3>
          <p class="text-center msg">The winning number is<br> <span>${num}</span><br>
          You Lose! Try again!</p>
        <hr>
      </div>`;
    return output;
  }
}

export { UI };
