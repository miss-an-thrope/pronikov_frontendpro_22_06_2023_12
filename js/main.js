const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generateKey = (length, characters) => {
   let text = [];
   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random()*characters.length);
      text.push(characters[randomIndex]);
   }
   return text.join('');
}

const key = generateKey(16, characters);
console.log(key);
console.log(key.length);

