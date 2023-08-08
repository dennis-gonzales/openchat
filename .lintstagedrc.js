module.exports = {
  '**/*.ts?(x)': ['eslint --fix', 'prettier --write'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
