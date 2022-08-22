// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var result = '';
for(let part of sentence.split(" ")){
  result += part.charAt(0).toUpperCase() + part.slice(1) + " ";
}
console.log(result.trim());

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
//REG EXP :((
var value = str.replace(/\D/g, "");
console.log(value);