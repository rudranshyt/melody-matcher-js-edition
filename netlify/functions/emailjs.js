const emailjs = require("emailjs-com");

exports.handler = async (event) => {
  try {
    // Environment variables
    const userID = process.env.userID;
    const serviceID = process.env.serviceID;
    const templateID = process.env.templateID;

    if (!userID || !serviceID || !templateID) {
      throw new Error("Missing required environment variables.");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        userID,
        serviceID,
        templateID,
      }),
    };
  } catch (error) {
    console.error("Error in function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
