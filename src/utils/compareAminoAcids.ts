export type CompareResult = {
  letter: string;
  match: boolean;
}[];

function compareAminoAcids(
  firstInput: string,
  secondInput: string,
): CompareResult {
  const firstString = firstInput.split("");
  const secondString = secondInput.split("");
  const result: CompareResult = [];
  for (let i = 0; i < firstString.length; i++) {
    const match = firstString[i] === secondString[i];
    result.push({ letter: secondString[i], match });
  }

  return result;
}

export default compareAminoAcids;
