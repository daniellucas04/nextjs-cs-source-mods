import query from "@/lib/database";

export default function modPage({ getMod }) {
  return (
    <main>
      {getMod.map((item) => (
        <div key={item.IdMod}>
          <h1>Title: {item.Title}</h1>
          <p>Description: {item.Description}</p>
          <p>Date: {item.UploadDate}</p>
          <p>Download link: {item.DownloadLink}</p>
          <p>Video id: {item.VideoId}</p>
          <p>Category: {item.Category}</p>
          <p>Image: {item.Thumbnail}</p>
        </div>
      ))}
    </main>
  );
}

export async function getServerSideProps(context) {
  const param = context.query.title;
  const getMod = await query({
    query: "SELECT * FROM mods WHERE Title = ?",
    values: [param],
  });

  return {
    props: {
      getMod,
    },
  };
}
