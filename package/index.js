function hexToRGB(hex) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b];
}

function luminance(r, g, b) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(color1, color2) {
  let rgb1 = color1[0] === "#" ? hexToRGB(color1) : color1;
  let rgb2 = color2[0] === "#" ? hexToRGB(color2) : color2;
  var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
  var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  let res = parseFloat((brightest + 0.05) / (darkest + 0.05)).toFixed(2);
  return parseFloat(
    res.slice(res.length - 3, res.length) === ".00" ? parseInt(res) : res
  );
}

module.exports = contrast;
