function calculateNetSalary(basicSalary, benefits) {
  let grossSalary = basicSalary + benefits;

  let payee = 0;
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    payee = 2400 + (grossSalary - 24000) * 0.25;
  } else if (grossSalary <= 500000) {
    payee = 2400 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
  } else if (grossSalary <= 800000) {
    payee = 2400 + 8333 * 0.25 + 467667 * 0.3 + (grossSalary - 500000) * 0.325;
  } else {
    payee =
      2400 +
      8333 * 0.25 +
      467667 * 0.3 +
      300000 * 0.325 +
      (grossSalary - 800000) * 0.35;
  }
  //   Applypersonal relief
  payee = payee - 2400;
  if (payee < 0) payee = 0;

  // NSSF
  let nssf = Math.min(basicSalary * 0.06, 6000);
  // NHIF
  let nhif = 1700;
  // netSalary
  let netSalary = grossSalary - payee - nssf - nhif;
  return {
    grossSalary,
    payee,
    nssf,
    nhif,
    netSalary,
  };
}
