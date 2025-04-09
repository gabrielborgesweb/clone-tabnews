import database from "infra-clonetabnews/database";

async function Status(request, response) {
  const allowedMethods = ["GET"];

  if (!allowedMethods.includes(request.method)) {
    return response.status(405).json({
      error: `Method "${request.method}" not allowed.`,
    });
  }

  const updatedAt = new Date().toISOString();
  const dbName = process.env.POSTGRES_DB;

  let version = await database.query("SHOW server_version;");
  let maxConnections = await database.query("SHOW max_connections;");
  let openedConnections = await database.query({
    text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;`,
    values: [dbName],
  });

  version = version.rows[0].server_version;
  maxConnections = maxConnections.rows[0].max_connections;
  openedConnections = openedConnections.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: version,
        max_connections: parseInt(maxConnections),
        opened_connections: openedConnections,
      },
    },
  });
}

export default Status;
