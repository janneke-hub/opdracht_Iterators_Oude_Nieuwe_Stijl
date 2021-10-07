const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
let text = "";

while (colors[i]) {
  text += colors[i];
  i++;
  console.log(colors)
}

const color = ["yellow", "blue", "red", "orange"];
let y = 0;
let text1 = "";
for (text1 += color[y]; color.length = 0; y++){
  console.log(color)
}


const colors1 = ["yellow", "blue", "red", "orange"];
colors1.forEach(element => console.log(element));

//1: While loop = 8 For loop = 6
//2: 2
//3: Korter en makkelijker leesbaar
//4: Nee je bent niet aan het itereren want je logged de gegevens uit de const.

const object = { a: 1, b: 2, c: 3, d: 4};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}