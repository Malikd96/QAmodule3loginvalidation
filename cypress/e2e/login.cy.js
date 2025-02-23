/// <reference types="cypress" />

import { validateLogin } from "../../src/login";

describe("Login Validation Tests", () => {
    it("should return true for valid credentials", () => {
        expect(validateLogin("admin", "1234")).to.equal(true);
    });

    it("should return false when username is missing", () => {
        expect(validateLogin("", "1234")).to.equal(false);
    });

    it("should return false when password is missing", () => {
        expect(validateLogin("admin", "")).to.equal(false);
    });

    it("should return false when both username and password are missing", () => {
        expect(validateLogin("", "")).to.equal(false);
    });

    it("should return false for an invalid username", () => {
        expect(validateLogin("user", "1234")).to.equal(false);
    });

    it("should return false for an invalid password", () => {
        expect(validateLogin("admin", "wrong")).to.equal(false);
    });

    it("should return false for both credentials invalid", () => {
        expect(validateLogin("user", "pass")).to.equal(false);
    });

    // You can add more edge case tests here as needed.
});
