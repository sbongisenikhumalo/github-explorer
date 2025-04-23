const request = require("supertest");
const express = require("express");
const apiRoutes = require("../routes/api");

const app = express();
app.use(express.json());
app.use("/api", apiRoutes);

describe("GitHub API Routes", () => {
  test("GET /api/search should return users", async () => {
    const res = await request(app).get("/api/search?q=octocat");
    expect(res.statusCode).toBe(200);
    expect(res.body.items).toBeDefined();
  });

  test("GET /api/users/:username should return user details", async () => {
    const res = await request(app).get("/api/users/octocat");
    expect(res.statusCode).toBe(200);
    expect(res.body.user).toBeDefined();
    expect(res.body.repos).toBeInstanceOf(Array);
  });
});
