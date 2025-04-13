const marvel_heros = ["Thor", "IronMan", "SpiderMan"];
const dc_heros = ["SuperMan", "Flash", "BatMan"];

// push for adding 2 arrays

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // [ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]
// console.log(marvel_heros[3][1]); // Flash

// concat for adding 2 arrays

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros); // [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

// spread operator for adding 2 or more arrays

// const all_new_heros = [...marvel_heros, ...dc_heros]; //spread operator - here we can add multiple arrays like [...a1, ...a2, ...a3] 
// console.log(all_new_heros); // [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]


// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [5, 3, 1, 7]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Rupesh"));
// console.log(Array.from("Priyanka"));
// console.log(Array.from({name: "Riyansh"})); //***************IMPORTANT****************** $$ returns empty array $$


// let score_1 = 100;
// let score_2 = 200;
// let score_3 = 300;
// console.log(Array.of(score_1,score_2,score_3));










