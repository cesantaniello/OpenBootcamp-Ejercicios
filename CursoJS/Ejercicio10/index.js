import chalk from 'chalk';

import { suma, multiplica } from './controller.js';

const suma1 = suma(1, 2);
const suma2 = suma(4, 5);
const mult = multiplica(suma1, suma2);

console.log(suma1);
console.log(suma2);
console.log(chalk.green(mult));
