const is = {
  hex: (a) => /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a),
  rgb: (a) => /^rgb/.test(a),
  hsl: (a) => /^hsl/.test(a),
  col: (a) => is.hex(a) || is.rgb(a) || is.hsl(a),
}

const convertToRgba = (colour) => {
  return is.hex(colour) ? hexToRgba(colour) : is.rgb(colour) ? rbgToRgba(colour) : colour
}

const hexToRgba = (colour, alpha = 1) => {
  const [r, g, b] = colour.match(/\w\w/g).map((x) => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}

const rbgToRgba = (colour, alpha = 1) => {
  const [r, g, b] = colour.replace(/[^\d,]/g, "").split(",")
  return `rgba(${r},${g},${b},${alpha})`
}


export const deconstructRgba = (rgba) => {
  return rgba
    .replace(/[^\d,]/g, "")
    .split(",")
    .map((x) => {
      return parseFloat(x)
    })
}

const formatRbga = (colour) => {
  return `rgba(${colour.r},${colour.g},${colour.b},${colour.a})`
}

export const interpolateColour = (colourA, colourB, progress) => {
  const [r1, g1, b1, a1] = deconstructRgba(convertToRgba(colourA))
  const [r2, g2, b2, a2] = deconstructRgba(convertToRgba(colourB))
  return formatRbga({
    r: Math.round((r2 - r1) * progress + r1),
    g: Math.round((g2 - g1) * progress + g1),
    b: Math.round((b2 - b1) * progress + b1),
    a: Math.round((a2 - a1) * progress + a1),
  })
}

export const clamp = (min, x, max) => {
  return Math.min(Math.max(min, x), max)
}