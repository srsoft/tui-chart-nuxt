export default function(elName) {
  if (typeof elName != 'string') return false
  const el = document.getElementById(elName);
  if (el == null || el == undefined) return false
  const data = {
    categories: ['July', 'Aug', 'Sep', 'Oct', 'Nov'],
    series: [
      {
        name: 'Budget',
        data: [3000, 5000, 7000, 6000, 4000],
      },
      {
        name: 'Income',
        data: [1000, 7000, 2000, 5000, 3000],
      },
    ],
  };
  const options = {
    chart: { width: 700, height: 400 },
  };

  toastui.Chart.lineChart({ el, data, options });
  return true
}
