function fatorial(num) {
  if (num < 0) return undefined;
  if (num == 0 || num == 1) return 1;
  return num * fatorial(num - 1);
}

module.exports = fatorial;
