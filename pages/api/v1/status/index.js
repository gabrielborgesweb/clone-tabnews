import database from "infra/database";

async function Status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");

  console.log(result.rows);

  response
    .status(200)
    .json({ chave: "alunos do curso.dev são pessoas acima da média." });
}

export default Status;
