import query from "@/lib/database";

export default async function handler(req, res) {
  let message;

  if (req.method === "GET") {
    const mods = await query({
      query: "SELECT * FROM mods",
      values: [],
    })
    res.status(200).json({ mods: mods })
  }

  if (req.method === "POST") {
    const title = req.body.title;
    const description = req.body.description;
    const downloadLink = req.body.downloadLink;
    const uploadDate = req.body.uploadDate
    const videoId = req.body.videoId;
    const category = req.body.category;
    const image = req.body.image;

    const addMods = await query({
      query: "INSERT INTO mods (Title, Description, UploadDate, DownloadLink, VideoId, Category, Thumbnail) VALUES (?, ?, ?, ?, ?, ?, ?)",
      values: [title, description, uploadDate, downloadLink, videoId, category, image],
    })

    if (addMods.insertId) {
      message = "success"
    } else {
      message = "error"
    }

    let mod = {
      Title: title,
      Description: description,
      UploadDate: uploadDate,
      DownloadLink: downloadLink,
      VideoId: videoId,
      Category: category,
      Thumbnail: image
    }

    res.status(200).json({ response: { message: message, mods: mod } })
  }
}