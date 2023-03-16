import {
  Database,
  DataTypes,
  Model,
  SQLite3Connector,
} from "https://deno.land/x/denodb@v1.2.0/mod.ts";

export class User extends Model {
  static table = "users";
  static timestamps = true;
  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
  };
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const connector = new SQLite3Connector({
    filepath: "./database.sqlite",
  });
  const db = new Database(connector);
  db.link([User]);
  console.log("Success!");
}
