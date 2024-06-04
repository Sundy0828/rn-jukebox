import {
  isValidEmail,
  isNullOrEmpty,
  isStrongPassword,
} from "../validateUtils";

describe("isValidEmail", () => {
  it("should return true for a valid email", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });

  it("should return false for an invalid email", () => {
    expect(isValidEmail("test@example")).toBe(false);
    expect(isValidEmail("")).toBe(false);
  });
});

describe("isNullOrEmpty", () => {
  it("should return true for null, undefined, and empty strings", () => {
    expect(isNullOrEmpty(null)).toBe(true);
    expect(isNullOrEmpty(undefined)).toBe(true);
    expect(isNullOrEmpty("")).toBe(true);
    expect(isNullOrEmpty("  ")).toBe(true); // non-empty string with whitespace
  });

  it("should return false for non-null, non-undefined, non-empty strings", () => {
    expect(isNullOrEmpty("Hello")).toBe(false);
  });
});

describe("isStrongPassword", () => {
  it("should return true for a strong password", () => {
    expect(isStrongPassword("StrongPassword123!")).toBe(true);
  });

  it("should return false for a weak password", () => {
    // Add test cases for weak passwords here
    expect(isStrongPassword("weakpassword")).toBe(false);
    expect(isStrongPassword("123456789")).toBe(false);
    expect(isStrongPassword("Abcd1234")).toBe(false);
    expect(isStrongPassword("1234567890")).toBe(false);
    expect(isStrongPassword("!@#$%^&*")).toBe(false);
    expect(isStrongPassword("abcdefgh")).toBe(false);
  });
});
