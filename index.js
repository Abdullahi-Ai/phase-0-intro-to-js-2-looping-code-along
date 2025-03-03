// Write Cards Function
function writeCards(names, eventName) {
    const message = [];
    for (let i = 0; i < names.length; i++) {
      message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return message;
  }
  
  // Example usage of writeCards:
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  
  // Count Down Function
  function countDown(number) {
    if (number < 1) {
      console.log("Please provide a positive integer.");
      return;
    }
  
    while (number >= 0) {
      console.log(number);
      number--; // Decrement the number after logging it
    }
  }
  
  // Example usage of countDown:
  countDown(10);
  