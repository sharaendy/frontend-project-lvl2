import { load } from 'js-yaml';

export default function parser(fileContent, formatName) {
  switch (formatName) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yml':
      return load(fileContent);
    case 'yaml':
      return load(fileContent);
    default:
      throw new Error(`Unknown format to parse: '${formatName}'!`);
  }
}
