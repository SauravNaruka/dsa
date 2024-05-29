const redix = 4;
const DNA_MAP = new Map([
  ["A", 1],
  ["C", 2],
  ["G", 3],
  ["T", 4],
]);

function findRepeatedSequences(s, k) {
  if (s.length < k) {
    return new Set();
  }

  const dnaSeq = getNumaricDNAId(s);
  console.log("dnaSeq" + dnaSeq);
  const result = new Set();
  const stringHash = new Set();

  let hashValue = calculateHashValueRange(dnaSeq, 0, k);
  stringHash.add(hashValue);
  console.log("Initial hash value" + hashValue);

  for (let i = k; i < dnaSeq.length; i++) {
    const removedElemntIdx = i - k;
    // c1 . a^(k-1) + c2 . a^(k-2)  + .... + ck . a^0
    const prevHash = dnaSeq[removedElemntIdx] * Math.pow(redix, k - 1); // How we calculate this
    hashValue = (hashValue - prevHash) * redix + dnaSeq[i];

    if (stringHash.has(hashValue)) {
      result.add(s.substring(removedElemntIdx + 1, i + 1));
    } else {
      stringHash.add(hashValue);
    }
  }
  return result;
}

function getNumaricDNAId(s) {
  let numSeq = [];
  for (let i = 0; i < s.length; i++) {
    const numId = DNA_MAP.get(s[i]);
    numSeq.push(numId);
  }
  return numSeq;
}

function calculateHashValueRange(dnaSeq, start, end) {
  let hashValue = 0;
  for (let i = start; i < end - 1; i++) {
    hashValue = (hashValue + dnaSeq[i]) * redix; // was not skipping zeroth place digit
  }

  return hashValue + dnaSeq[end - 1]; // didn't set the final here
}

export { findRepeatedSequences };
