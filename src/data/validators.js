// Shared field-level validation used by every public-facing form (Contact,
// Partner/Driver application, etc.) so "what counts as valid" stays consistent
// site-wide instead of being redefined per form.

export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

// Accepts digits, spaces, +, -, and parentheses (so "+91 98765 43210" or
// "(080) 2354-1166" both work), but requires 7-15 actual digits — the range
// that covers real phone numbers without accepting a handful of stray digits.
export const isValidPhone = (value) => {
  const trimmed = value.trim();
  if (!/^[0-9+\-()\s]+$/.test(trimmed)) return false;
  const digitCount = trimmed.replace(/\D/g, "").length;
  return digitCount >= 7 && digitCount <= 15;
};

// Strips characters that could never belong in a phone number, applied as the
// user types so invalid characters (letters, symbols) never make it in.
export const sanitizePhoneInput = (value) => value.replace(/[^0-9+\-()\s]/g, "");

// Strips anything but digits, applied as the user types (registration years,
// PIN-style numeric fields).
export const sanitizeDigitsInput = (value) => value.replace(/\D/g, "");

export const isValidYear = (value, { min = 1990, max = new Date().getFullYear() + 1 } = {}) => {
  const trimmed = value.trim();
  if (!/^\d{4}$/.test(trimmed)) return false;
  const year = Number(trimmed);
  return year >= min && year <= max;
};

// Letters, spaces, and the common name punctuation (', ., -) only — blocks
// digits/symbols without being overly strict about non-English names.
export const isValidName = (value) => /^[\p{L}\s'.-]+$/u.test(value.trim());
