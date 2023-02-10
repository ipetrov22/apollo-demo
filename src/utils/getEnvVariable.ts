export function getEnvVariable(varName: string): string {
  if (!process.env[varName]) {
    throw new Error(`ENV variable ${varName} is not specified.`);
  }

  return (process.env as { [key: string]: string })[varName];
}
