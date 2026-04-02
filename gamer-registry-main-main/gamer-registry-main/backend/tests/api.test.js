const request = require("supertest");
const app = require("../app");
/*
  test("GET /games deve retornar 200", async() => {
    const response = await request(app).get("/api/games");
    console.log(response.body); 
    expect(response.statusCode).toBe(200);
});


test("GET /games retorna uma lista", async() => {
    const response = await request(app).get("/api/games");

    expect(Array.isArray(response.body)).toBe(true);
});

test("POST /api/games cria um novo jogo", async() => {
    const response = await request (app)
    .post("/api/games").send({
        title: "teste automatizado",
        genre: "RPG",
        release_year: 2024
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("teste automatizado");
})

test("POST /games sem nome deve retornar erro", async () => {
    const response = await request (app)
    .post("/api/games")
    .send({}); //corpo vazio

    expect(response.statusCode).toBe(400);
})*/
