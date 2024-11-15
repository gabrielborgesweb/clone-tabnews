import orchestrator from "tests/orchestrator";
const baseUrl = process.env.SITE_URL;

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe("POST to /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    describe("Running pending migrations", () => {
      test("For the first time", async () => {
        const response1 = await fetch(baseUrl + "/api/v1/migrations", {
          method: "POST",
        });
        expect(response1.status).toBe(201);

        const response1Body = await response1.json();
        // console.log(response1Body);

        expect(Array.isArray(response1Body)).toBe(true);
        expect(response1Body.length).toBeGreaterThan(0);
      });

      test("For the second time", async () => {
        const response2 = await fetch(baseUrl + "/api/v1/migrations", {
          method: "POST",
        });
        expect(response2.status).toBe(200);

        const response2Body = await response2.json();
        // console.log(response2Body);

        expect(Array.isArray(response2Body)).toBe(true);
        expect(response2Body.length).toBe(0);
      });
    });
  });
});
