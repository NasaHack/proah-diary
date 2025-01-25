(() => {
  let [M, D, Y, h, m, s, AM_PM] = new Date()
    .toLocaleString()
    .replaceAll(/[\/ ,:]/g, " ")
    .split(" ")
    .filter(Boolean);
  console.log(`${D}-${M}-${Y}_${h}-${m}-${s}-${AM_PM}.md`);
})();
