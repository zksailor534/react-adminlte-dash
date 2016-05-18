const shell = require('shelljs');

shell.echo('=> Transpiling "src" into ES5 ...');
shell.echo('');
shell.rm('-rf', './dist');

if (shell.exec('babel --ignore tests,stories' +
  ' --plugins "transform-runtime" src --out-dir dist').code === 0) {
  shell.echo('');
  shell.echo('=> Transpiling completed.');
} else {
  shell.echo('');
  shell.echo('=> Transpiling unsuccessful.');
}
