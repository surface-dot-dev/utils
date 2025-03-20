import chalk from 'chalk';

class Logger {
  info(...args: any[]) {
    console.log(this._prefix(), ...args);
  }

  warn(...args: any[]) {
    console.warn(this._prefix(), chalk.yellow(...args));
  }

  error(...args: any[]) {
    console.error(this._prefix(), chalk.red(...args));
  }

  _prefix(): string {
    return chalk.gray(new Date().toISOString());
  }
}

export const logger = new Logger();
