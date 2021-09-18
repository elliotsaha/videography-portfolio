import {
  destructureColor,
  restructureColor,
  hexToRgb,
  rgbToHex,
  hslToRgb,
  getLuminance,
  contrastText,
  darkenColor,
  lightenColor,
} from './ColorManipulation';

describe('utils/colorManipulator', () => {
  describe('destructureColor', () => {
    it('converts rgb color string to object with `type` and `value` keys', () => {
      const { type, values } = destructureColor('rgb(255, 255, 255)');
      expect(type).toEqual('rgb');
      expect(values).toEqual([255, 255, 255]);
    });
    it('converts rgba color string to object with `type` and `value` keys', () => {
      const { type, values } = destructureColor('rgba(255, 255, 255, 0.5)');
      expect(type).toEqual('rgba');
      expect(values).toEqual([255, 255, 255, 0.5]);
    });
    it('converts hsl color string to object with `type` and `value` keys', () => {
      const { type, values } = destructureColor('hsl(100, 50%, 25%)');
      expect(type).toEqual('hsl');
      expect(values).toEqual([100, 50, 25]);
    });
    it('converts hsla color string to object with `type` and `value` keys', () => {
      const { type, values } = destructureColor('hsla(100, 50%, 25%, 0.5)');
      expect(type).toEqual('hsla');
      expect(values).toEqual([100, 50, 25, 0.5]);
    });
    it('converts CSS4 color space display-3 to object with `type,` `value,` and `colorSpace` keys', () => {
      const { type, values, colorSpace } = destructureColor(
        'color(display-p3 0 1 0)',
      );
      expect(type).toEqual('color');
      expect(colorSpace).toEqual('display-p3');
      expect(values).toEqual([0, 1, 0]);
    });
    it('converts alpha CSS4 color string to object with `type,` `value,` and `colorSpace` keys', () => {
      const { type, values, colorSpace } = destructureColor(
        'color(display-p3 0 1 0 /0.4)',
      );
      expect(type).toEqual('color');
      expect(colorSpace).toEqual('display-p3');
      expect(values).toEqual([0, 1, 0, 0.4]);
    });
    it('converts rgba hex color string to object with `type` and `value` keys', () => {
      const decomposed = destructureColor('#111111f8');
      expect(decomposed).toEqual({
        type: 'rgba',
        colorSpace: null,
        values: [17, 17, 17, 0.973],
      });
    });
    it('throws error at non-existent color space', () => {
      const destructureWithError = () => destructureColor('color(foo 0 1 0)');
      expect(destructureWithError).toThrow();
    });
    it('throws error at non-existant color type', () => {
      const decimposeWithError = () => destructureColor('foo(255, 255, 255)');
      expect(decimposeWithError).toThrow();
    });
    it('decomposed input should equal to decomposed output', () => {
      const output1 = destructureColor('hsla(100, 50%, 25%, 0.5)');
      const output2 = destructureColor(output1);
      expect(output1).toEqual(output2);
    });
  });
  describe('restructureColor', () => {
    it('converts decomposed rgb color object to string', () => {
      expect(
        restructureColor({
          type: 'rgb',
          values: [255, 255, 255],
        }),
      ).toEqual('rgb(255, 255, 255)');
    });
    it('converts decomposed rgba color object to string', () => {
      expect(
        restructureColor({
          type: 'rgba',
          values: [255, 255, 255, 0.5],
        }),
      ).toEqual('rgba(255, 255, 255, 0.5)');
    });
    it('converts decomposed hsl color object to string', () => {
      expect(
        restructureColor({
          type: 'hsl',
          values: [100, 50, 25],
        }),
      ).toEqual('hsl(100, 50%, 25%)');
    });
    it('converts decomposed hsla color object to string', () => {
      expect(
        restructureColor({
          type: 'hsla',
          values: [100, 50, 25, 0.5],
        }),
      ).toEqual('hsla(100, 50%, 25%, 0.5)');
    });
    it('converts decomposed CSS4 color object to string', () => {
      expect(
        restructureColor({
          type: 'color',
          colorSpace: 'display-p3',
          values: [0.5, 0.3, 0.2],
        }),
      ).toEqual('color(display-p3 0.5 0.3 0.2)');
    });
  });
  describe('hexToRgb', () => {
    it('converts a short hex color to an rgb color` ', () => {
      expect(hexToRgb('#9f3')).toEqual('rgb(153, 255, 51)');
    });

    it('converts a long hex color to an rgb color` ', () => {
      expect(hexToRgb('#a94fd3')).toEqual('rgb(169, 79, 211)');
    });

    it('converts a long alpha hex color to an argb color` ', () => {
      expect(hexToRgb('#111111f8')).toEqual('rgba(17, 17, 17, 0.973)');
    });
  });
  describe('rgbToHex', () => {
    it('converts an rgb color to a hex color` ', () => {
      expect(rgbToHex('rgb(169, 79, 211)')).toEqual('#a94fd3');
    });

    it('converts an rgba color to a hex color` ', () => {
      expect(rgbToHex('rgba(169, 79, 211, 1)')).toEqual('#a94fd3ff');
    });

    it('hex input should equal hex output', () => {
      expect(rgbToHex('#A94FD3')).toEqual('#A94FD3');
    });
  });
  describe('hslToRgb', () => {
    it('converts an hsl color to an rgb color` ', () => {
      expect(hslToRgb('hsl(281, 60%, 57%)')).toEqual('rgb(169, 80, 211)');
    });

    it('converts an hsla color to an rgba color` ', () => {
      expect(hslToRgb('hsla(281, 60%, 57%, 0.5)')).toEqual(
        'rgba(169, 80, 211, 0.5)',
      );
    });

    it('allow to convert values only', () => {
      expect(hslToRgb(destructureColor('hsl(281, 60%, 57%)'))).toEqual(
        'rgb(169, 80, 211)',
      );
    });
  });
  describe('getLuminance', () => {
    it('returns a valid luminance for rgb black', () => {
      expect(getLuminance('rgba(0, 0, 0)')).toEqual(0);
      expect(getLuminance('rgb(0, 0, 0)')).toEqual(0);
      expect(getLuminance('color(display-p3 0 0 0)')).toEqual(0);
    });

    it('returns a valid luminance for rgb white', () => {
      expect(getLuminance('rgba(255, 255, 255)')).toEqual(1);
      expect(getLuminance('rgb(255, 255, 255)')).toEqual(1);
    });

    it('returns a valid luminance for rgb mid-grey', () => {
      expect(getLuminance('rgba(127, 127, 127)')).toEqual(0.212);
      expect(getLuminance('rgb(127, 127, 127)')).toEqual(0.212);
    });

    it('returns a valid luminance for an rgb color', () => {
      expect(getLuminance('rgb(255, 127, 0)')).toEqual(0.364);
    });

    it('returns a valid luminance from an hsl color', () => {
      expect(getLuminance('hsl(100, 100%, 50%)')).toEqual(0.735);
    });

    it('returns an equal luminance for the same color in different formats', () => {
      const hsl = 'hsl(100, 100%, 50%)';
      const rgb = 'rgb(85, 255, 0)';
      expect(getLuminance(hsl)).toEqual(getLuminance(rgb));
    });

    it('returns a valid luminance from an CSS4 color', () => {
      expect(getLuminance('color(display-p3 1 1 0.1)')).toEqual(0.929);
    });

    it('throw on invalid colors', () => {
      expect(() => {
        getLuminance('black');
      }).toThrow();
    });
  });
  describe('contrastText', () => {
    it('lightens a dark rgb color', () => {
      expect(contrastText('rgb(1, 2, 3)')).toEqual(
        lightenColor('rgb(1, 2, 3)', 1),
      );
    });

    it('darkens a light rgb color', () => {
      expect(contrastText('rgb(250, 240, 230)')).toEqual(
        darkenColor('rgb(250, 240, 230)', 1),
      );
    });

    it('lightens a dark CSS4 color', () => {
      expect(contrastText('color(display-p3 0.1 0.1 0.1)')).toEqual(
        lightenColor('color(display-p3 0.1 0.1 0.1)', 1),
      );
    });

    it('darkens a light CSS4 color', () => {
      expect(contrastText('color(display-p3 1 1 0.1)')).toEqual(
        darkenColor('color(display-p3 1 1 0.1)', 1),
      );
    });
  });
  describe('darkenColor', () => {
    it("doesn't modify rgb black", () => {
      expect(darkenColor('rgb(0, 0, 0)', 0.1)).toEqual('rgb(0, 0, 0)');
    });

    it("doesn't overshoot if an above-range coefficient is supplied", () => {
      expect(() => {
        expect(darkenColor('rgb(0, 127, 255)', 1.5)).toEqual('rgb(0, 0, 0)');
      });
    });

    it("doesn't overshoot if a below-range coefficient is supplied", () => {
      expect(() => {
        expect(darkenColor('rgb(0, 127, 255)', -0.1)).toEqual(
          'rgb(0, 127, 255)',
        );
      });
    });
    it('darkens rgb white to black when coefficient is 1', () => {
      expect(darkenColor('rgb(255, 255, 255)', 1)).toEqual('rgb(0, 0, 0)');
    });

    it('retains the alpha value in an rgba color', () => {
      expect(darkenColor('rgb(0, 0, 0, 0.5)', 0.1)).toEqual(
        'rgb(0, 0, 0, 0.5)',
      );
    });

    it('darkens rgb white by 10% when coefficient is 0.1', () => {
      expect(darkenColor('rgb(255, 255, 255)', 0.1)).toEqual(
        'rgb(229, 229, 229)',
      );
    });

    it('darkens rgb red by 50% when coefficient is 0.5', () => {
      expect(darkenColor('rgb(255, 0, 0)', 0.5)).toEqual('rgb(127, 0, 0)');
    });

    it('darkens rgb grey by 50% when coefficient is 0.5', () => {
      expect(darkenColor('rgb(127, 127, 127)', 0.5)).toEqual('rgb(63, 63, 63)');
    });

    it("doesn't modify rgb colors when coefficient is 0", () => {
      expect(darkenColor('rgb(255, 255, 255)', 0)).toEqual(
        'rgb(255, 255, 255)',
      );
    });

    it('darkens hsl red by 50% when coefficient is 0.5', () => {
      expect(darkenColor('hsl(0, 100%, 50%)', 0.5)).toEqual(
        'hsl(0, 100%, 25%)',
      );
    });

    it("doesn't modify hsl colors when coefficient is 0", () => {
      expect(darkenColor('hsl(0, 100%, 50%)', 0)).toEqual('hsl(0, 100%, 50%)');
    });

    it("doesn't modify hsl colors when l is 0%", () => {
      expect(darkenColor('hsl(0, 50%, 0%)', 0.5)).toEqual('hsl(0, 50%, 0%)');
    });

    it('darkens CSS4 color red by 50% when coefficient is 0.5', () => {
      expect(darkenColor('color(display-p3 1 0 0)', 0.5)).toEqual(
        'color(display-p3 0.5 0 0)',
      );
    });

    it("doesn't modify CSS4 color when coefficient is 0", () => {
      expect(darkenColor('color(display-p3 1 0 0)', 0)).toEqual(
        'color(display-p3 1 0 0)',
      );
    });
  });
  describe('lightenColor', () => {
    it("doesn't modify rgb white", () => {
      expect(lightenColor('rgb(255, 255, 255)', 0.1)).toEqual(
        'rgb(255, 255, 255)',
      );
    });

    it("doesn't overshoot if an above-range coefficient is supplied", () => {
      expect(() => {
        expect(lightenColor('rgb(0, 127, 255)', 1.5)).toEqual(
          'rgb(255, 255, 255)',
        );
      });
    });

    it("doesn't overshoot if a below-range coefficient is supplied", () => {
      expect(() => {
        expect(lightenColor('rgb(0, 127, 255)', -0.1)).toEqual(
          'rgb(0, 127, 255)',
        );
      });
    });

    it('lightens rgb black to white when coefficient is 1', () => {
      expect(lightenColor('rgb(0, 0, 0)', 1)).toEqual('rgb(255, 255, 255)');
    });

    it('retains the alpha value in an rgba color', () => {
      expect(lightenColor('rgb(255, 255, 255, 0.5)', 0.1)).toEqual(
        'rgb(255, 255, 255, 0.5)',
      );
    });

    it('lightens rgb black by 10% when coefficient is 0.1', () => {
      expect(lightenColor('rgb(0, 0, 0)', 0.1)).toEqual('rgb(25, 25, 25)');
    });

    it('lightens rgb red by 50% when coefficient is 0.5', () => {
      expect(lightenColor('rgb(255, 0, 0)', 0.5)).toEqual('rgb(255, 127, 127)');
    });

    it('lightens rgb grey by 50% when coefficient is 0.5', () => {
      expect(lightenColor('rgb(127, 127, 127)', 0.5)).toEqual(
        'rgb(191, 191, 191)',
      );
    });

    it("doesn't modify rgb colors when coefficient is 0", () => {
      expect(lightenColor('rgb(127, 127, 127)', 0)).toEqual(
        'rgb(127, 127, 127)',
      );
    });

    it('lightens hsl red by 50% when coefficient is 0.5', () => {
      expect(lightenColor('hsl(0, 100%, 50%)', 0.5)).toEqual(
        'hsl(0, 100%, 75%)',
      );
    });

    it("doesn't modify hsl colors when coefficient is 0", () => {
      expect(lightenColor('hsl(0, 100%, 50%)', 0)).toEqual('hsl(0, 100%, 50%)');
    });

    it("doesn't modify hsl colors when `l` is 100%", () => {
      expect(lightenColor('hsl(0, 50%, 100%)', 0.5)).toEqual(
        'hsl(0, 50%, 100%)',
      );
    });

    it('lightens CSS4 color red by 50% when coefficient is 0.5', () => {
      expect(lightenColor('color(display-p3 1 0 0)', 0.5)).toEqual(
        'color(display-p3 1 0.5 0.5)',
      );
    });

    it("doesn't modify CSS4 color when coefficient is 0", () => {
      expect(lightenColor('color(display-p3 1 0 0)', 0)).toEqual(
        'color(display-p3 1 0 0)',
      );
    });
  });
});
