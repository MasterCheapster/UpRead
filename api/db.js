import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ayush7000",
  database: "blog",
});
//ayushvidit2023
