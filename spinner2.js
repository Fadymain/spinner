process.stdout.write('hello from spinner1.js... \rheyyy\n');

let icon = "|/-\\|/-\\|"
let delay = 100;
for (let spin of icon) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}`)
  }, delay += 200)
};