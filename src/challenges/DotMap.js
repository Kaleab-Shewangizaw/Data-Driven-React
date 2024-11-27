// 1-----------------------------------------------------------

const nums = [1, 2, 3, 4, 5];

// expected output [1, 4, 9, 16, 25]

const numsSquare = nums.map((num) => num ** 2);

console.log(numsSquare);

// 2-----------------------------------------------------------

const names = ["alice", "bob", "charlie", "danielle"];

// expected output ['Alice', 'Bob', 'Charlie', 'Danielle']

const capitalizedNames = names.map((name) => name[0].toUpperCase() + name.substring(1));

console.log(capitalizedNames);

// 3-----------------------------------------------------------------

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle']

// expected output ['<p>Bulbasaur</p>', '<p>Charmander</p>', '<p>Squirtle</p>']

const pokemonInP = pokemon.map((poke) => `<p>${poke}</p>`)

console.log(pokemonInP)



