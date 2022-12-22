const Calc = (suppliers) => {

    let suppliersArray = [];
    let weightingPrice = 10;
    let weightingOnTimeDelivery = 6;
    let weightingQuality = 8;
  
  
    //manipulating original supplier array of objects
    //--->>> addding scores per category and calculating total scores
    //as well as total hard/soft facts score
    for (let i = 0; i < suppliers.length; i++) {
      let obj = {};
      let pairPrice = {};
      let pairOnTimeDelivery = {};
      let pairQualitiy = {};
  
      //---- Hard Facts-----
      //Pricing Score
      if (suppliers[i].materialPriceChange >= 2) pairPrice = { priceScore: 0 * weightingPrice};
      else if (suppliers[i].materialPriceChange >= 0.3) pairPrice = { priceScore: 5 * weightingPrice};
      else if (suppliers[i].materialPriceChange >= -0.3) pairPrice = { priceScore: 10 * weightingPrice};
      else if (suppliers[i].materialPriceChange >= -2) pairPrice = { priceScore: 15 * weightingPrice};
      else if (suppliers[i].materialPriceChange < -2) pairPrice = { priceScore: 20 * weightingPrice};
  
      //OnTimeDelivery Score
      if (suppliers[i].deliveryPerformance >= 95) pairOnTimeDelivery = { onTimeScore: 20 * weightingOnTimeDelivery};
      else if (suppliers[i].deliveryPerformance >= 90) pairOnTimeDelivery = { onTimeScore: 15 * weightingOnTimeDelivery};
      else if (suppliers[i].deliveryPerformance >= 75) pairOnTimeDelivery = { onTimeScore: 10 * weightingOnTimeDelivery};
      else if (suppliers[i].deliveryPerformance >= 60) pairOnTimeDelivery = { onTimeScore: 5 * weightingOnTimeDelivery};
      else if (suppliers[i].deliveryPerformance < 60) pairOnTimeDelivery = { onTimeScore: 0 * weightingOnTimeDelivery};
  
      //Qualtity Score
      if (suppliers[i].qualityPerformance >= 98) pairQualitiy = { qualityScore: 15 * weightingQuality};
      else if (suppliers[i].qualityPerformance >= 95) pairQualitiy = { qualityScore: 10 * weightingQuality};
      else if (suppliers[i].qualityPerformance >= 90) pairQualitiy = { qualityScore: 5 * weightingQuality};
      else if (suppliers[i].qualityPerformance < 90) pairQualitiy = { qualityScore: 0 * weightingQuality};
  
      let pairHardFactsScore = {hardFactsScore: pairPrice.priceScore + pairOnTimeDelivery.onTimeScore + pairQualitiy.qualityScore};
      
      //---- Soft Facts-----    
      let pairSoftFactsScore = {softFactsScore: 100};
  
      //---- Total Score-----
      let pairTotalScore = {totalScore: pairHardFactsScore.hardFactsScore + pairSoftFactsScore.softFactsScore};
  
  
      //---ABC Evaluation: Rating of Supplier
      let pairEvaluation = {};
      if (pairTotalScore.totalScore >= 380) pairEvaluation = {totalRating: 'A'};
      else if (pairTotalScore.totalScore >= 350) pairEvaluation = {totalRating: 'B'};
      else if (pairTotalScore.totalScore >= 320) pairEvaluation = {totalRating: 'C'};
      else if (pairTotalScore.totalScore < 320) pairEvaluation = {totalRating: 'D'};
      
  
  
      //---adding all calculated objects together into a new array
      obj = { ...suppliers[i], ...pairPrice, ...pairOnTimeDelivery, ...pairQualitiy, ...pairHardFactsScore, ...pairSoftFactsScore, ...pairTotalScore, ...pairEvaluation };
      suppliersArray.push(obj);
    }
   



    return suppliersArray;
}
 
export default Calc;