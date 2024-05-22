import { Umzug, SequelizeStorage } from "umzug";
import { Sequelize } from "sequelize";
const executedInDockerContainer = () => {
  if (!process.env.DOCKER_RUNNING) {
    throw new Error(
      "\x1b[31mCaution\x1b[0m: This operation should be executed within the Docker container!",
    );
  }
};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: "postgres",
    freezeTableName: true,
    logging: process.env.SQL_LOGGING === "true",
    define: {
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

const init = async () => {
  // Only accept with the following arguments:
  switch (true) {
    case process.argv.length === 3 && process.argv[2] === "db:migrate":
    case process.argv.length === 3 && process.argv[2] === "db:migrate:undo":
    case process.argv.length === 3 && process.argv[2] === "db:migrate:undo:all":
      break;
    default:
      return;
  }

  try {
    executedInDockerContainer();

    const migrator = new Umzug({
      migrations: { glob: "migrations/*.js" },
      context: sequelize.getQueryInterface(),
      storage: new SequelizeStorage({ sequelize }),
    });
    let result = [];
    switch (true) {
      case process.argv[2] === "db:migrate":
        result = await migrator.up();
        console.log(
          `Migrated ${result.length} file${result.length === 1 ? "" : "s"}`,
        );
        break;
      case process.argv[2] === "db:migrate:undo":
        result = await migrator.down();
        console.log(
          `Rolled back ${result.length} migration${
            result.length === 1 ? "" : "s"
          }`,
        );
        break;
      case process.argv[2] === "db:migrate:undo:all":
        result = await migrator.down({ to: 0 });
        console.log(
          `Rolled back ${result.length} migration${
            result.length === 1 ? "" : "s"
          }`,
        );
        break;
      default:
        break;
    }

    if (result.length > 0) {
      for (const name of result.map((f) => f.name)) {
        console.log(`${name}`);
      }
    }
  } catch (e) {
    console.log(e);
    console.log(`\n\x1b[31mError message\x1b[0m: ${e.message}`);
  } finally {
    process.exit();
  }
};

await init();

export { sequelize, executedInDockerContainer };
