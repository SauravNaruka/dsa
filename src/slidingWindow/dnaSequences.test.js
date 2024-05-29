import { findRepeatedSequences } from "./dnaSequences";

describe("test DNA Sequences algo", () => {
  test("dna findRepeatedSequences get repeated dna seq", () => {
    // expect(findRepeatedSequences("ACACT", 2)).toEqual(new Set(["AC"]));
    expect(findRepeatedSequences("AAAAACCCCCAAAAACCCCCC", 8)).toEqual(
      new Set(["AAAAACCC", "AAAACCCC", "AAACCCCC"])
    );
  });
});
