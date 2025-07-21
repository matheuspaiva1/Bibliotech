import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      aluno: Model,
    },

    seeds(server) {
      server.create("aluno", { name: "Caio", age: 17 });
      server.create("aluno", { name: "Andre", age: 17 });
      server.create("aluno", { name: "Vicente Brasil", age: 17 });
    },

    routes() {
      this.namespace = "api";

      this.get("/alunos", (schema) => {
        return schema.alunos.all();
      });
    },
  });

  return server;
}

export function initMirage() {
  if (typeof window === "undefined") return;

  if (!window.server) {
    window.server = makeServer();
  }
}
