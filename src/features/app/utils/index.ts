export const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

export const longestText = (str: string) => {
  const text = str.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
  const length = text.length;
  return {
    text,
    length,
  };
};

export const countWordsInInput = (
  input: string[],
  query: string[]
): number[] => {
  const result: number[] = [];

  const wordCount: Record<string, number> = {};
  for (const word of input) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  for (const word of query) {
    result.push(wordCount[word] || 0);
  }
  return result;
};

export const diagonalDifference = (matrix: number[][]): number => {
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    diagonal1 += matrix[i][i];
    diagonal2 += matrix[i][matrix.length - 1 - i];
  }

  const difference = Math.abs(diagonal1 - diagonal2);
  return difference;
};
