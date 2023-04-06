import query from "@/lib/database";


export default async function handler(req, res) {
  let message;

  if (req.method === "POST") {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;



    const signup = await query({
      query: "INSERT INTO users (Username, Email, Password)",
      values: [username, email, encryptPassword],
    })

    if (signup.insertId) {
      message = "success";
    } else {
      message = "error";
    }

    let sign = {
      Username: username,
      Email: email,
      password: encryptPassword,
    }

    res.status(200).json({})
  }
} 