import React from "react";
import SuiButton from "components/SuiButton";
import Stripe from "react-stripe-checkout";
import { Auth } from "aws-amplify";
import profileimage from "assets/images/team-1.jpg";
import SuiBox from "components/SuiBox";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * {@code Checkout} creates the component for Stripe integration and checkout.
 *
 * @author Pang Jun Rong
 * @author Teo Keng Swee
 * @version 1.0
 * @since 2021-10-16
 */

export default function App(props) {

  const { employeeSkill, onClose, selectedValue, open, selection } = props;
  const startDate = new Date(selection.startDate.getFullYear(),selection.startDate.getMonth(), selection.startDate.getDate()+1);
  const endDate = new Date(selection.endDate.getFullYear(),selection.endDate.getMonth(), selection.endDate.getDate()+1);
  const numDays = (selection.endDate.getMonth() - selection.startDate.getMonth()) * 30 + selection.endDate.getDate() - selection.startDate.getDate() + 1;
  const [loanCompanyId, setLoanCompanyId] = useState('0123456789');
  const dispatch = useDispatch();
  const totalCost = Number((numDays * employeeSkill.cost / 7.0).toFixed(2)); //used for transaction post
  const totalCostInCents = totalCost * 100.0; //used for stripe

  useEffect(() => {
    retrieveCompany();
  }, '0123456789');

  function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
      );
    }
    return keyValuePairs.join("&");
  }

  async function retrieveCompany() {
    const response = await Auth.currentSession().then((res) => {
    fetch('/api/employees/company' + "/" + employeeSkill.workPermitNumber, {
        headers: {
            'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
            Accept: "application/json",
        "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(data => dispatch(setLoanCompanyId(data)))
        .then(console.log(loanCompanyId));

    });
    return loanCompanyId;
  }

   async function handleToken(token) {
    console.log(token);
    
    const response = await Auth.currentSession().then((res) => {
      // Persist the transaction.
      const compId = res.getIdToken().payload['cognito:groups'][0];

      var dataFormatted = {
        "startDate" : startDate,
        "endDate" : endDate,
        "totalCost" : parseFloat(totalCost),
        "loanCompanyId" : parseFloat(loanCompanyId),
        // "loanCompanyId" : ,
        "borrowingCompanyId" : String(compId),
        "employeeId" : String(employeeSkill.workPermitNumber),  
        "status" : "Pending"
      };
      console.log(JSON.stringify(dataFormatted));
      fetch("/api/transactions" 
      // + (`?${queryComp}`) 
      , { 
        method: "POST",
        headers: {
          Authorization: "Bearer " + res.getIdToken().getJwtToken(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataFormatted),
        
      }).catch((error) => {
        alert(error);
      });

      //Make the Stripe payment.
      fetch(`/api/payment/charge`, {
        method: "POST",
        headers: {
          'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': token.id,
          'amount': "" + {totalCostInCents},

        },
      }
      ).then(() => {
        
        alert("Payment Success \nYou will be contacted in 1-3 business days by the parent company regarding the hire-sharing.")
      })
        .catch((error) => {
          alert(error);
        });
    });
    
    
  };
 

  return (
    <Stripe
      name={employeeSkill.name} // the pop-in header title
      description={employeeSkill.company}// the pop-in header subtitle
      image={profileimage}
      ComponentClass="div"
      label="Submit" // text inside the Stripe button
      panelLabel="Hire for" // prepended to the amount in the bottom pay button
      currency="SGD"
      amount={totalCostInCents}
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