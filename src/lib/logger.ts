import chalk from 'chalk';

class Logger {
  info(...args) {
    console.log(this._prefix(), ...args);
  }

  warn(...args) {
    console.warn(this._prefix(), chalk.yellow(...args));
  }

  error(...args) {
    console.error(this._prefix(), chalk.red(...args));
  }

  _prefix(): string {
    return chalk.gray(new Date().toISOString());
  }
}

export const logger = new Logger();
