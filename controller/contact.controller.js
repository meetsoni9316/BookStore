import Contact from "../model/contact.model.js";

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const createdContact = new Contact({
      name: name,
      email: email,
      message: message,
    });
    await createdContact.save();

    res.status(200).json({ message: "contact created successfully" });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
