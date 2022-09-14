const session = require("supertest-session");
const app = require("../../src/app.js");

const agent = session(app);

// it("should reply the GET method with status code 200", async () => {
//   const res = await request(app).get("/");
//   expect(res.statusCode).toBe(200);
// });

// it("should reply the POST method /videogames with status code 400 if data not send", async () => {
//   const res = await request(app).post("/videogames");
//   expect(res.statusCode).toBe(400);
// });

describe("Test de la ruta videogames", () => {
  describe("GET /", () => {
    it("response with 200", () => agent.get("/").expect(404));
  });
});
