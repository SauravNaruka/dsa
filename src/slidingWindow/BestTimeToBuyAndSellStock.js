export function maxProfit(prices) {
  let sell = 0;
  let buy = 0;
  let profit = 0;

  while (sell < prices.length) {
    if (prices[sell] < prices[buy]) {
      buy = sell;
    }

    if (profit < prices[sell] - prices[buy]) {
      profit = prices[sell] - prices[buy];
    }
    sell++;
  }

  return profit;
}
