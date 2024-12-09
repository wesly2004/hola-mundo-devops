const fs = require('fs');
const path = require('path');

test('El archivo index.html contiene el texto "Hola Mundo"', () => {
    const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
    expect(html).toMatch(/Hola Mundo/);
});
