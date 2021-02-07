function scuberGreetingForFeet(dist) {
  if (dist < 200) {
    return 'This one is on me!'
  }
  else if (dist > 2000 && dist <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (dist > 2500) {
    return 'No can do.'
  }
  
}

function ternaryCheckCity(city) {
  city == "NYC" ? "Ok, sounds good." : "No go.";
}