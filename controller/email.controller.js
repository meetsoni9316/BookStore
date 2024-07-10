import Email from "../model/email.model.js";

export const email = async (req, res) => {
  try {
    const { email } = req.body;
    const createdContact = new Email({
      email: email,
    });
    await createdContact.save();

    res.status(200).json({ message: "Our Team Will Contact You Soon" });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
