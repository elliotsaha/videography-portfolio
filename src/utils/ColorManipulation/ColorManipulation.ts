type StringColor = string;

interface DestructuredColor {
  type: string;
  values: Array<number>;
  colorSpace?: string | null;
}

type AnyTypeColor = StringColor | DestructuredColor;

// allows value to only be in the range  [min, max]
const clamp = (inputVal: number, min = 0, max = 1): number =>
  Math.min(Math.max(min, inputVal), max);

/* check if string starts with "hsl" or "rgb" which automatically
 * includes "hsla" and "rgba" values
 * */
const includesString = (color: string | Array<string>, type: string): boolean =>
  color.indexOf(type) !== -1;

export const hexToRgb = (color: StringColor): StringColor => {
  // check if already rgb
  if (includesString(color, 'rgb')) {
    return color;
  }

  color = color.substr(1); // get rid of # symbol

  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors: RegExpMatchArray | null = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n); // add strings together
  }

  if (colors) {
    if (colors[0].length === 1) {
      colors = colors.map((n) => n + n); // add strings together
    }
    return `rgb${colors.length === 4 ? 'a' : ''}(${colors
      .map((n, index) =>
        index < 3
          ? parseInt(n, 16)
          : Math.round((parseInt(n, 16) / 255) * 1000) / 1000,
      )
      .join(', ')})`;
  }

  return '';
};

/* turns css color string into array.
 * e.g. 'rgb', 'rgba', 'hsl', 'hsla' -> [n,n,n] or [n,n,n,n]
 * */
export const destructureColor = (color: AnyTypeColor): DestructuredColor => {
  // check if color is already deconstructed
  if ((color as DestructuredColor).type) {
    return color as DestructuredColor;
  }

  // do not allow hex values to be parsed directly
  if ((color as StringColor).charAt(0) === '#') {
    const convertedRGBColor = hexToRgb(color as StringColor);
    return destructureColor(convertedRGBColor);
  }

  // seperate values from the color type
  const marker = (color as StringColor).indexOf('(');
  const type = (color as StringColor).substring(0, marker);

  let possibleTypes = ['rgb', 'rgba', 'hsl', 'hsla', 'color'];
  if (!includesString(possibleTypes, type)) {
    throw new Error(
      'Theory-UI only supports these color formats: hex, rgb(), rgba(), hsl(), hsla(), color()',
    );
  }

  /*
   * returns string with only numbers and comma, e.g. "255, 255, 255"
   * array<string> type included for string splitting & array<number> included for final parseFloat result
   * */
  type ColorValues = string | Array<string> | Array<number>;
  let values: ColorValues = (color as StringColor).substring(
    marker + 1,
    (color as StringColor).length - 1,
  );

  // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
  type ColorSpace = string | null | undefined;
  let colorSpace: ColorSpace = null;

  // color css e.g. - "color(display-p3 1 0.352 0.285)"
  if (type === 'color') {
    values = values.split(' '); // values is an array, e.g. ["display-p3", "1", "0.352", "0.285"]
    colorSpace = values.shift(); // colorspace is now first element of array e.g. "display-p3"

    // accounts for alpha CSS4
    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].substr(1);
    }

    possibleTypes = [
      'srgb',
      'display-p3',
      'a98-rgb',
      'prophoto-rgb',
      'rec-2020',
    ];

    if (!includesString(possibleTypes, colorSpace as string)) {
      throw new Error(
        'Theory-UI only supports these color space formats: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020',
      );
    }
  } else {
    values = values.split(','); // for when type is not color, e.g. ["255", "255", "255"]
  }

  values = values.map((value) => parseFloat(value)); // turns each string into number, e.g. [255, 255, 255]
  return { type, values, colorSpace };
};

/*
 * turns destructured array of numbers into css color string
 * */
export const restructureColor = (
  colorObject: DestructuredColor,
): StringColor => {
  const { type, colorSpace } = colorObject;
  const { values } = colorObject;

  type RestructuredValues = Array<number | string> | string;
  let restructuredValues: RestructuredValues = values;

  if (includesString(type, 'rgb')) {
    // integer conversion not including alpha value
    restructuredValues = values.map((value: number, index: number) =>
      index < 3 ? parseInt(value.toString(), 10) : value,
    ); // radix does not automatically default to 10
  } else if (includesString(type, 'hsl')) {
    // hsl percentage formating
    restructuredValues[1] = `${values[1]}%`;
    restructuredValues[2] = `${values[2]}%`;
  }

  if (includesString(type, 'color')) {
    // color type formatting
    restructuredValues = `${colorSpace} ${restructuredValues.join(' ')}`;
  } else {
    // regular type formatting (adds commas between values)
    restructuredValues = `${restructuredValues.join(', ')}`;
  }

  return `${type}(${restructuredValues})`;
};

export const rgbToHex = (color: StringColor): StringColor => {
  // check if already hex
  if (color.indexOf('#') === 0) {
    return color;
  }

  // get rgb number values in array from rgb string
  const { values } = destructureColor(color);

  const convertToHex = (int: number) => {
    const hex = int.toString(16); // base16 conversion
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${values
    .map((value, index) =>
      convertToHex(index === 3 ? Math.round(255 * value) : value),
    )
    .join('')}`;
};

export const hslToRgb = (color: AnyTypeColor): StringColor => {
  const destructuredHsl = destructureColor(color);
  const { values } = destructuredHsl;

  const h = values[0];
  // hsl percentages
  const s = values[1] / 100;
  const l = values[2] / 100;

  const a = s * Math.min(l, 1 - l);

  const f = (n: number, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type = 'rgb';
  const rgb = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];

  if (destructuredHsl.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return restructureColor({ type, values: rgb });
};

// formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
export const getLuminance = (color: AnyTypeColor): number => {
  const destructured = destructureColor(color);
  type RGB = Array<number> | DestructuredColor;

  // check type of destructured color and convert if neccessary
  let rgb: RGB =
    destructured.type === 'hsl'
      ? destructureColor(hslToRgb(destructured)).values
      : destructured.values;

  rgb = (rgb as Array<number>).map((val: number) => {
    if ((destructured as DestructuredColor).type !== 'color') {
      // R8bit -> RsRGB, G8bit -> GsRGB, B8bit -> BsRGB
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // truncate at 3 digits
  return Number(
    (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3),
  );
};

export const lightenColor = (
  color: AnyTypeColor,
  coefficient: number,
): StringColor => {
  color = destructureColor(color);
  coefficient = clamp(coefficient);

  if (includesString(color.type, 'hsl')) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (includesString(color.type, 'rgb')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (includesString(color.type, 'color')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }

  return restructureColor(color);
};

export const darkenColor = (
  color: AnyTypeColor,
  coefficient: number,
): StringColor => {
  color = destructureColor(color);
  coefficient = clamp(coefficient);

  if (includesString(color.type, 'hsl')) {
    color.values[2] *= 1 - coefficient;
  } else if (
    includesString(color.type, 'rgb') ||
    includesString(color.type, 'color')
  ) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return restructureColor(color);
};

export const contrastText = (color: AnyTypeColor): StringColor =>
  // return white text with dark color input & black text with light color input
  getLuminance(color) > 0.5 ? darkenColor(color, 1) : lightenColor(color, 1);
