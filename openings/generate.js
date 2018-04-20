const readline = require('readline');
const fs = require('fs');

const OPENING_NUM = 26;
const BOARD_SIZE = 15;

let openings = new Array(OPENING_NUM);
for (let i = 0; i < OPENING_NUM; i++) {
  openings[i] = {
    initial: require(`./opening${i + 1}.json`),
    data: [],
  };
}

let i = 0;

readline.createInterface({
  input: fs.createReadStream('openings/formula.txt'),
}).on('line', line => {
  line = line.trim();
  if (!line) return;
  const args = line.split(' ');
  if (args[0] === String(i + 1)) {
    ++i;
  } else {
    const arg0 = args.shift();
    openings[i - 1].data.push({
      other: arg0,
      me: args,
    });
  }
}).on('close', () => {
  const str = `module.exports=${JSON.stringify(openings)};`;
  fs.writeFileSync('openings/openings.js', str.replace(/"/g, '\''));
});

