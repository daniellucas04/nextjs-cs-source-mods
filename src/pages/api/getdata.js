import query from "@/lib/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const mods = await query({
      query: "SELECT * FROM mods",
      values: [],
    })
    res.status(200).json({ mods: mods })
  }
}