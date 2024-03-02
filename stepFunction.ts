adjustSIAccordingToStep(benefit: Benefit) {
  if (benefit.sumInsuredStep !== 0) {
    if (benefit.benefitSumInsured % benefit.sumInsuredStep !== 0) {
      const higherDivisible = Math.ceil(benefit.benefitSumInsured / benefit.sumInsuredStep) * benefit.sumInsuredStep;
      const lowerDivisible = Math.floor(benefit.benefitSumInsured / benefit.sumInsuredStep) * benefit.sumInsuredStep;
      const higherDifference = Math.abs(benefit.benefitSumInsured - higherDivisible);
      const lowerDifference = Math.abs(benefit.benefitSumInsured - lowerDivisible);
      if (higherDifference < lowerDifference) {
        benefit.benefitSumInsured = higherDivisible;
      } else {
        benefit.benefitSumInsured = lowerDivisible;
      }
    }
  } else {
    console.error('Error: sumInsuredStep cannot be zero.');
  }
}
