const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const StreamChat = require("stream-chat");

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const register = async (req, res) => {
  try {
    const { email, fullName, phoneNumber, password } = req.body;

    const userId = crypto.randomBytes(16).toString("hex");

    const serverClient = connect(api_key, api_secret, app_id);

    const hashedPassword = await bcrypt.hash(password, 10);

    const token = serverClient.createUserToken(userId);

    res
      .status(200)
      .json({ token, fullName, phoneNumber, hashedPassword, email, userId });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const serverClient = connect(api_key, api_secret, app_id);
    const client = StreamChat.getInstance(api_key, api_secret);

    const { users } = await client.queryUsers({ name: email });

    if (!users.length) {
      res.status(400).json({ message: "User not found" });
    }

    const success = await bcrypt.compare(password, users[0].hashedPassword);

    const token = serverClient.createUserToken(users[0].id);

    if (success) {
      res.status(200).json({
        token,
        fullName: users[0].fullName,
        email,
        userId: users[0].id,
      });
    } else {
      res.status(500).json({ message: "incorrect password or email" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e });
  }
};

module.exports = { login, register };
