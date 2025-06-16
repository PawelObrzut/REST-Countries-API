import request from "supertest";
import app from "../app";
import * as fetchAllCountries from "../services/fetchAllCountries";

describe('The root path notifies to prepend "/api/" to every request', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("and responses the GET with a message", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.body.message).toEqual(
          "resources available at /api/ routes"
        );
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("GET /api/allCountries endpoint", () => {
  it("returns 200 and country data on success", (done) => {
    request(app)
      .get("/api/allCountries")
      .then((response) => {
        const countries = response.body.payload;

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(countries)).toBe(true);
        expect(countries[0]).toMatchObject({
          flag: expect.any(String),
          name: expect.any(String),
          population: expect.any(Number),
          region: expect.any(String),
          capital: expect.any(String),
        });
        done();
      })
      .catch(done);
  });

  it("returns 500 and error message on failure", (done) => {
    jest
      .spyOn(fetchAllCountries, "fetchAllCountries")
      .mockRejectedValue(new Error());

    request(app)
      .get("/api/allCountries")
      .then((response) => {
        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe("Internal Server Error");
        done();
      });
  });
});

describe("GET unserved endpoints", () => {
  it("returns a CoutryServiceError", (done) => {
    request(app)
      .get("/anything")
      .then((response) => {
        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe("This endpoint is not served");
        done();
      })
  })
})