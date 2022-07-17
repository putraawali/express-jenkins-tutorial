const { app } = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("Running test", () => {
    test("Test GET endpoint /", (done) => {
        request.get("/").then(res => {
            expect(res.status).toBe(200)
            expect(res.body).toHaveProperty("messag")
            done()
        }).catch(err => done(err))
    })
})