import React from "react";
import SuiButton from "components/SuiButton";
import Stripe from "react-stripe-checkout";
import { Auth } from "aws-amplify";
import profileimage from "assets/images/team-1.jpg";
import SuiBox from "components/SuiBox";

/**
 * {@code Checkout} creates the component for Stripe integration and checkout.
 *
 * @author Pang Jun Rong
 * @author Teo Keng Swee
 * @version 1.0
 * @since 2021-10-16
 */

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
          'token': token.id,
          'amount': '500',

        },
      }).then(() => {
        alert("Payment Success \nYou will be contacted in 1-3 business days by the parent company regarding the hire-sharing.")
      })
        .catch((error) => {
          alert(error);
        });
    });
  };

  return (
    <Stripe
      name="James Smith" // the pop-in header title
      description="Wan Kah Construction Pte Ltd" // the pop-in header subtitle
      image={profileimage}
      ComponentClass="div"
      label="Submit" // text inside the Stripe button
      panelLabel="Hire for" // prepended to the amount in the bottom pay button
      currency="SGD"
      amount={80000}
      locale="en"
      stripeKey="pk_test_51JjP7qFwG6YcxwhyrbB3ljilisjDA3b28136bJ1pQONRGxQY5IxfddiZk3Wx69w8w60BEkIaOi3hVBTsB01yrq04004bU9S3XQ"
      token={handleToken}
    >
      <SuiButton size="large" variant="gradient" buttonColor="success" circular type="submit">
        <SuiBox px={3} color="white">
          Submit
        </SuiBox>
      </SuiButton>
    </Stripe>
  );
}
