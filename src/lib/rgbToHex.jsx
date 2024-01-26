export const getRgb = () => Math.floor(Math.random() * 256);

export const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
        .map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        })
        .join('');
