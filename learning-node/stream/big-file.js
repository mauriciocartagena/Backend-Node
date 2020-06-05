const fs = require('fs');
const file = fs.createWriteStream('./big');

for (let i = 0; i <= 1e6; i++) {
  file.write('Estaba la pajara pinta sentada en un verde limón, Con el pico cortaba la rama, con la rama cortaba.Pero no ,pero no, porqie me da vergüeza, pero si , pero so so so so')
}
file.end();