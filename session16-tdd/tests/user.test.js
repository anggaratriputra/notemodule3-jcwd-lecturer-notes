const request = require("supertest");
const app = require("../app");
const { User } = require("../models");

jest.mock("../models");

describe("GET /api/users", () => {
  it("should return array of users", async () => {
    const users = [
      { firstName: "John", lastName: "Doe", email: "a@user.com" },
      { firstName: "Jane", lastName: "Doe", email: "b@user.com" },
    ];
    User.findAll.mockResolvedValue(users);

    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(users);
  });

  it("should return error when getting users is failed", async () => {
    User.findAll.mockRejectedValue(new Error("database failed"));

    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(500);
    expect(response.text).toEqual("An error occured while fetching users");
  });
});
