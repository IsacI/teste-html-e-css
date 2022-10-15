const salario = prompt(`digite o valor do salario`);
const aumento = prompt(`digite a % do aumento`);

const valorAumento = salario * (number(aumento)/100);
const novoSalario = valorAumento + number(salario);
console.log(valorAumento);
