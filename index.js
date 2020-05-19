function scuberGreetingForFeet(feet){
if (feet < 400) {
  return 'This one is on me!'
}
  else if (feet > 2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  if (city == 'NYC') {
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  }
  
  
  // Write your code here!
}

function switchOnCharmFromTip(generosity){
  let response;
  switch (generosity) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response;
  
}