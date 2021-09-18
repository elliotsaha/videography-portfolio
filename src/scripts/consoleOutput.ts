type ConsoleType = 'ERR' | 'WARN' | 'INFO' | 'SUCCESS';
type ConsoleMessage = string;

const ConsoleOutput = (type: ConsoleType, message: ConsoleMessage): null => {
  // color escape keys (in same order as possibleTypes)
  const colors = ['\x1b[31m', '\x1b[33m', '\x1b[34m', '\x1b[32m'];
  const possibleTypes = ['ERR', 'WARN', 'INFO', 'SUCCESS'];

  if (!possibleTypes.includes(type)) {
    console.log(
      colors[0],
      `INTERNAL ERR: Invalid Type supplied to function: genError(). Avaliable types are ${possibleTypes.join(
        ', ',
      )}, you supplied: ${type}`,
    );
    process.exit(1);
  } else {
    const index = possibleTypes.indexOf(type);
    console.log(colors[index], `${type}: ${message}`);
  }

  return null;
};

export default ConsoleOutput;
