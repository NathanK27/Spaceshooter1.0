b = [40, 80, 120, 160, 200, 240, 280, 320, 360] //coordinates for a

function setup () {
  createCanvas(400, 400)
  background(0)
  fill(255)
  textSize(50)
  text("SpaceShooter", 50, 200)
  textSize(20)
  text("Press Shift to Start", 120, 250)
  ship(200, 50)
}

let x = 200 // x-coordinate of the shipw
let y = 250 // y-coordinate of the ship

let a = 200 // x-coordinate of the bullet
let c = 25 // y-coordinate of the bullet
let d = 0 // Speed of the bullet

let h = 5 // Hearts
let s = 0 // Score
let m = 0 // Money

let e = 1 // Money Increaser

let g = 40 //Side to Side Movement for the ship

// Bullet Speed Increment Variables
let id10 = false
let id20 = false
let id30 = false
let id40 = false
let id50 = false
let id60 = false
let id70 = false
let id80 = false
let id90 = false

let pause = false

//Spaceship
function ship(x, y) {
  fill(255, 0, 0)
  triangle(x, y, x - 25, y + 75, x + 25, y + 75)
  fill(135, 206, 235)
  triangle(x + 15, y + 65, x + 10, y + 30, x + 75, y + 100)
  triangle(x - 15, y + 65, x - 10, y + 30, x - 75, y + 100)
  fill(255)
}

function upgrade() {
  if (m >= 10) {
    d -= 0.1
    m -= 10
  }
}

function draw() {
  while (d >= 1) {
  ellipse(a, c, 25)
  c += d
  ship(x, y)

  //In Game Text
  textSize(20)
  fill(255, 0, 0)
  text("Hearts:", 10, 330)
  text(h, 77, 330)
  fill(0, 0, 255)
  text("Score:", 10, 350)
  text(s, 70, 350)
  fill(0, 255, 0)
  text("$", 10, 370)
  text(m, 30, 370)
  textSize(15)
  fill(255)
  text("Slow Down Bullets: $10 (J)", 215, 50)
  text("Move Ship Back: $15 (K)", 230, 70)
  text("Increase Money: $20 (L)", 232, 90)
  text("Increase Hearts: $30 (M)", 230, 110)
  text("Press F to Pause and G to Unpause", 10, 390)
  
  fill(255)
  if (c > 400) {
    c = 25
    h -= 1
    a = random(b)
    background(0)
  }
  if (s == 10) {
    if (!id10) {
      d += 0.5
      id10 = true
    }
  }
  else if (s == 20) {
    if (!id20) {
      d += 0.5
      id20 = true
    }
  }
  else if (s == 30) {
    if (!id30) {
      d += 0.5
      id30 = true
    }
  }
  else if (s == 40) {
    if (!id40) {
      d += 0.5
      id40 = true
    }
  }
  else if (s == 50) {
    if (!id50) {
      d += 0.5
      id50 = true
    }
  }
  else if (s == 60) {
    if (!id60) {
      d += 0.5
      id60 = true
    }
  }
  else if (s == 70) {
    if (!id70) {
      d += 0.5
      id70 = true
    }  
  }
  else if (s == 80) {
    if (!id80) {
      d += 0.5
      id80 = true
    }
  }
  else if (s == 90) {
    if (!id90) {
      d += 0.5
      id90 = true
    }
  }

  // End Game
  if (h <= 0) {
    background(0)
    textSize(50)
    text("Game Over:", 40, 200)
    text(s, 320, 200)
    textSize(20)
    text("Press Enter to Restart", 100, 225)
  }
}
}

//Controls
function keyPressed() {
  if (keyCode == 65) {
    if (x > 60) {
      x -= g
      background(0)
    }
  } //Move Left (A)
  if (keyCode == 68) {
    if (x < 340) {
      x += g
      background(0)
    }
  } //Move Right (D)
  if (!pause) {
    if (keyCode == 87) {
      fill(255, 0, 255)
      rect(x - 5, 0, 10, y)
      if (c < y) {
        if (x == a) {
          background(0)
          rect(x - 5, 0, 10, y)
          a = random(b)
          c = 25
          s += 1
          m += e
        }
      }
    }
  } //Shoot (W)
  if (keyCode == 13) {
    x = 200
    y = 250
    a = 200
    c = 25
    d = 1
    h = 5
    s = 0
    m = 0
    e = 1
    id10 = false
    id20 = false
    id30 = false
    id40 = false
    id50 = false
    id60 = false
    id70 = false
    id80 = false
    id90 = false
    background(0)
  } //Reset Game (Enter)
  if (keyCode == 74) {
    upgrade()
    background(0)
  } //Slow Bullet Speed (J)
  if (keyCode == 75) {
    if (y < 300) {
      if (m >= 15) {
        y += 10
        m -= 15
        background(0)
      }
    }
  } //Move Ship Back (K)
  if (keyCode == 76) {
    if (m >= 20) {
      e += 1
      m -= 20
      background(0)
    }
  } //Increase Money Per Bullet (L)
  if (keyCode == 73) {
    if (m >= 30) {
      h += 1
      m -= 30
      background(0)
    }
  } //Increase Hearts (I)
  if (keyCode == 70) {
    if (!pause) {
      f = d
      d = 0
      g = 0
      pause = true
    }
  }
  if (keyCode == 71) {
    if (pause) {
      d = f
      g = 40
      pause = false
    }
  }
  if (keyCode == 83) {
    d = 1
  } //Start Game (S)
}
