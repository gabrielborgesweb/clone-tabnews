const { exec } = require("child_process");

async function checkPostgres() {
  const ora = (await import("ora")).default;

  const spinner = ora({
    text: "Aguardando Postgres aceitar conexões...",
    color: "green",
  }).start();

  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);
  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      spinner.text = "Aguardando Postgres aceitar conexões...";
      setTimeout(
        () => exec("docker exec postgres-dev pg_isready", handleReturn),
        1000,
      );
      return;
    }

    spinner.succeed("🚀 Postgres está pronto para aceitar conexões!\n");
  }
}

checkPostgres();
