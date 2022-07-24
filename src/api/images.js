export const getData = () =>
  fetch("https://api.waifu.pics/sfw/waifu").then((response) => response.json());
