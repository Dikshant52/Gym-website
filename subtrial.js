let monthlyPrice = {
    basic: 1000,
    prime: 1500,
    personalTraining: 6000
  };
  
  function calculatePrice(packageType, durationType) {
    let totalPrice;
    let discountMultiplier = 1;
    if (durationType === 'three-month') {
      discountMultiplier = 3;
      totalPrice = (monthlyPrice[packageType] * discountMultiplier) - 100;
    } else if (durationType === 'six-month') {
      discountMultiplier = 6;
      totalPrice = (monthlyPrice[packageType] * discountMultiplier) - 500;
    } else if (durationType === 'yearly') {
      discountMultiplier = 12;
      totalPrice = (monthlyPrice[packageType] * discountMultiplier) - 2000;
    } else {
      totalPrice = monthlyPrice[packageType];
    }
    return totalPrice;
  }
  
  function calculate() {
    const packageType = document.querySelector('input[name="package"]:checked').value;
    const durationType = document.querySelector('input[name="duration"]:checked').value;
    const totalPrice = calculatePrice(packageType, durationType);
    document.getElementById('result').textContent = `Total price: ${totalPrice} rupees`;
  }
  