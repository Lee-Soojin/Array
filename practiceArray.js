const foods = ['🍔','🍕','🥪','🍕','🥞'];
const num = [12,4,5,14,3,19,8];
console.log(foods);



string = num.toLocaleString();
console.log(`string:${string}, type:${typeof string}`);
const all = foods.concat(num);
console.log(all);

console.log(foods.join());
console.log(num.join('.'));
console.log(foods.slice(0,3));
console.log(foods.indexOf('🍕',2));
console.log(foods.lastIndexOf('🍕'));

const Val = value => value <10;
console.log(num.some(Val));
console.log(num.every(Val));
foods.forEach((food)=> console.log(food));

const M= [4,16,25];
const Sq= M.map(Math.sqrt);

console.log(Sq);

const array1 = [1,2,3,4,5];
const Filtering = array1.filter(arr => arr%2===0);
console.log(Filtering);

const Redu = (a,b) => a*b;
console.log(array1.reduce(Redu));

const array2 = [['🍔','🍕'],['👨','👧'],['🚓','🚕']].reduceRight((c,d) => c.concat(d));
console.log(array2);

array2.pop();
console.log(array2);

array2.push('🍠','🧀');
console.log(array2);
array2.reverse();
console.log(array2);
array2.shift();
console.log(array2);
array2.unshift('🥐');
console.log(array2);