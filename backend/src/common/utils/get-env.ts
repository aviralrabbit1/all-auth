export const getEnv = (key: string, defaultValue: string = ""): string => {
  const value = process.env[key];
  // console.log(`🔍 getEnv: ${key} =`, value || 'NOT FOUND');

  if (value === undefined) {
    if(defaultValue){
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
}
