const request = require("supertest");
const app = require("../server");

describe("GitHub API Endpoints", () => {
  it("should search for users", async () => {
    const res = await request(app).get("/api/search?q=octocat");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("items");
  });

  it("should get user details", async () => {
    const res = await request(app).get("/api/users/octocat");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("user");
    expect(res.body).toHaveProperty("repos");
  });
});
