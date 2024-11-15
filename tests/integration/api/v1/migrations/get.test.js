import orchestrator from "tests/orchestrator";
const baseUrl = process.env.SITE_URL;

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe("GET to /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("Retrieving pending migrations", async () => {
      const response = await fetch(baseUrl + "/api/v1/migrations");
      expect(response.status).toBe(200);

      const responseBody = await response.json();
      // console.log(responseBody);

      expect(Array.isArray(responseBody)).toBe(true);
      expect(responseBody.length).toBeGreaterThan(0);
    });
  });
});
