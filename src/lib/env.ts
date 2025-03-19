export const ev = (name: string, fallback: any = null): any =>
  process.env.hasOwnProperty(name) ? process.env[name] : fallback;
