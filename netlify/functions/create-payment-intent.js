require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51LzahZLAdc5aWjj4QlCchYypsiqT5XPwexb6Y5fmyyOUv1yALA3Z2uKYvn35clvBX4DW3U7HZRMBRRny7TDYLCwG00L4tAUMWU"
);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
