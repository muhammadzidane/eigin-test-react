import {
  reverseString,
  longestText,
  countWordsInInput,
  diagonalDifference,
} from "..";

describe("Utility Functions", () => {
  describe("reverseString", () => {
    it("should reverse a string", () => {
      expect(reverseString("hello")).toBe("olleh");
      expect(reverseString("12345")).toBe("54321");
      expect(reverseString("")).toBe("");
    });
  });

  describe("longestText", () => {
    it("should return the longest word and its length", () => {
      const result1 = longestText("hello world");
      expect(result1.text).toBe("world");
      expect(result1.length).toBe(5);

      const result2 = longestText("hello javascript programming");
      expect(result2.text).toBe("programming");
      expect(result2.length).toBe(11);
    });
  });

  describe("countWordsInInput", () => {
    it("should count occurrences of words in input array based on query array", () => {
      const input = ["apple", "banana", "apple", "orange", "banana", "grape"];
      const query = ["apple", "banana", "grape", "kiwi"];

      const result = countWordsInInput(input, query);
      expect(result).toEqual([2, 2, 1, 0]);
    });
  });

  describe("diagonalDifference", () => {
    it("should calculate the absolute difference between sum of diagonals in a matrix", () => {
      const matrix1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      expect(diagonalDifference(matrix1)).toBe(0);

      const matrix2 = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
      ];
      expect(diagonalDifference(matrix2)).toBe(15);
    });
  });
});
