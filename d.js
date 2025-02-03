(() => {
  let [M, D, Y, h, m, _, AM_PM] = new Date()
    .toLocaleString()
    .replaceAll(/[\/ ,:]/g, " ")
    .split(" ")
    .filter(Boolean);
  console.log(`${D}-${M}-${Y}_${h}:${m}${AM_PM}.md`);
})();
