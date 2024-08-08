function Status(request, response) {
  response
    .status(200)
    .json({ chave: "alunos do curso.dev são pessoas acima da média." });
}

export default Status;
