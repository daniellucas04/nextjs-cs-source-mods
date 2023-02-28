import query from "@/lib/database";


export default async function handler(req, res) {
  if (req.method === "GET") {
    const knifes = await query({
      query: "SELECT * FROM mods WHERE Category = 'knifes'",
      values: [],
    })

    res.status(200).json({ knifes: knifes })
  }
}