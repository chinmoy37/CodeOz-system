import tokens from './tokens.json';

export type DesignTokens = typeof tokens;
export { tokens };

export const colors = tokens.color;
export const typography = tokens.typography;
export const spacing = tokens.spacing;
export const borderRadius = tokens.borderRadius;
export const elevation = tokens.elevation;
