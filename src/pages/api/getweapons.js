import query from "@/lib/database";


export default async function handler(req, res) {
  if (req.method === "GET") {
    const weapons = await query({
      query: "SELECT * FROM mods WHERE Category = 'rifles'",
      values: [],
    })

    res.status(200).json({ weapons: weapons })
  }
}