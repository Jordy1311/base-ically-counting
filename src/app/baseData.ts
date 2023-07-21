interface BaseData {
  id: string,
  name: string,
  value: string,
  regex: RegExp,
  possibleChars: string,
}

export const baseData: BaseData[] = [
  {
    id: '2',
    name: 'Base 2',
    value: '',
    regex: /[0-1]/g,
    possibleChars: "0 or 1",
  },
  {
    id: '8',
    name: 'Base 8',
    value: '',
    regex: /[0-8]/g,
    possibleChars: "0 to 8",
  },
  {
    id: '10',
    name: 'Base 10',
    value: '',
    regex: /[0-9]/g,
    possibleChars: "0 to 9",
  },
  {
    id: '16',
    name: 'Base 16',
    value: '',
    regex: /[0-9A-Fa-f]/g,
    possibleChars: "0 to 9 and a to f",
  },
  {
    id: '32',
    name: 'Base 32',
    value: '',
    regex: /[0-9A-Va-v]/g,
    possibleChars: "0 to 9 and a to v",
  },
];
