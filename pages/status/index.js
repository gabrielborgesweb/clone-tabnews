import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status:</h1>
      <h2 style={{ marginBottom: "2em" }}>
        Os dados abaixo se atualizará no intervalo de 5 segundos.{" "}
      </h2>
      <UpdatedAt />
      <DatabaseVersion />
      <DatabaseMaxConnections />
      <DatabaseOpenedConnections />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 5000,
  });

  let renderText = "Carregando...";

  if (!isLoading && data) {
    renderText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return (
    <p>
      <b>Última atualização:</b> {renderText}
    </p>
  );
}

function DatabaseVersion() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 5000,
  });

  let renderText = "Carregando...";

  if (!isLoading && data) {
    renderText = String(data.dependencies.database.version);
  }

  return (
    <p>
      <b>Versão da base de dados:</b> {renderText}
    </p>
  );
}

function DatabaseMaxConnections() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 5000,
  });

  let renderText = "Carregando...";

  if (!isLoading && data) {
    renderText = String(data.dependencies.database.max_connections);
  }

  return (
    <p>
      <b>Conexões máxima da base de dados:</b> {renderText}
    </p>
  );
}

function DatabaseOpenedConnections() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 5000,
  });

  let renderText = "Carregando...";

  if (!isLoading && data) {
    renderText = String(data.dependencies.database.opened_connections);
  }

  return (
    <p>
      <b>Conexões abertas da base de dados:</b> {renderText}
    </p>
  );
}
