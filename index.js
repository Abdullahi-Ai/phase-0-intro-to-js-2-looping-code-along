// Corrected loop with template literals
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, eventName) {
  const message = [];
  for (let i = 0; i < names.length; i++) {
      message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return message;
}

function countDown(number) {
  if (number < 1) {
      console.log("Please provide a positive integer.");
      return;
  }

  while (number >= 0) {
      console.log(number);
      number--;
  }
}