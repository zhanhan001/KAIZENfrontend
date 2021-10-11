import React, { useState, useEffect } from "react";
import SuiButton from "components/SuiButton";
import Stripe from "react-stripe-checkout";
import { Auth } from "aws-amplify";



const ProductDisplay = () => (
  <section>
    <form action="/create-checkout-session" method="POST">
      <SuiButton
        size="large"
        variant="gradient"
        buttonColor="success"
        type="submit"
      >
        Checkout
      </SuiButton>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {

  async function handleToken(token) {
    console.log(token);
    Auth.currentSession().then((res) => {
        fetch(`/api/payment/charge`, {
          method: "POST",
          headers: {
            'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token' : token.id,
            'amount' : '500',

          },
        }).then(() => {
            alert("Payment Success");
        })
        .catch((error) => {
          alert(error);
        });
      });
    };

  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <div>
      <Stripe
        stripeKey="pk_test_51JjP7qFwG6YcxwhyrbB3ljilisjDA3b28136bJ1pQONRGxQY5IxfddiZk3Wx69w8w60BEkIaOi3hVBTsB01yrq04004bU9S3XQ"
        token={handleToken}
      />
      <ProductDisplay />
    </div>
  );
}
