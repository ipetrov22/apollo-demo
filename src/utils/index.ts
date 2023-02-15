import Big from 'big.js';

export function sortQueryData<DataType>(
  data: DataType[],
  orderBy: string,
  orderDirection: string | undefined
): DataType[] {
  return data.sort((a, b) => {
    const valA = a[orderBy];
    const valB = b[orderBy];
    let res = 0;

    if (valA instanceof Big) {
      const diff = valA.minus(valB);

      // check if the diff is more or less than 0
      res = diff.eq(0) ? 0 : diff.gt(0) ? 1 : -1;
    } else if (typeof valA === 'string') {
      res = valA.localeCompare(valB);
    }

    if (orderDirection === 'desc') {
      res *= -1;
    }

    return res;
  });
}
