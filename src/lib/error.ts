export const formatError = (
  prefix: string,
  e: unknown = '',
  args: Record<string, any> = {}
): string => {
  // Custom error prefix.
  let err = prefix;

  // Actual pass-through error message.
  const errMsg = (e as Error).message || String(e);
  if (errMsg) {
    err += `: ${errMsg}`;
  }

  // Relevant params/args.
  let argPairs: string[] = [];
  for (const [key, value] of Object.entries(args)) {
    argPairs.push(`${key}=${value}`);
  }
  if (argPairs.length) {
    err += `(${argPairs.join(', ')})`;
  }

  return err;
};
