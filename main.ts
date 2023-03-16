import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@v0.31.1/mod.ts";

if (import.meta.main) {
const client = new MongoClient();
}