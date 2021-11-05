import React from "react";
import SuiButton from "components/SuiButton";
import Stripe from "react-stripe-checkout";
import { Auth } from "aws-amplify";
import profileimage from "assets/images/team-1.jpg";
import SuiBox from "components/SuiBox";
import { useState, useEffect } from "react";

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
  const [loanCompany, setLoanCompany] = useState(null);

  const totalCost = numDays * employeeSkill.cost * 100.00/7.0;

  function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
      );
    }
    return keyValuePairs.join("&");
  }

  // async function retrieveCompany() {
  //   Auth.currentSession().then((res) => {
  //     // Persist the transaction.
  //     const compId = res.getIdToken().payload['cognito:groups'][0];
  //     const queryString = objToQueryString({
  //         id: employeeSkill.workPermitNumber, 
  //     });
  //     fetch('/api/employees/' + `?${queryString}`, {
  //       method: "GET",
  //       headers: {
  //           'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
  //           Accept: "application/json",
  //       "Content-Type": "application/json",
  //       },
  //     }).catch((err) => {
  //             console.log("Err: ", err);
  //     }).then(response => response.json());

  //   });
  // }

  const retrieveCompany = async () => {
    const response = await Auth.currentSession().then(res => {
      const queryString = objToQueryString({
          name: employeeSkill.company, 
      });
      fetch('/api/companies/specific/' + `?${queryString}`, {
          headers: {
              'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
              Accept: "application/json",
          "Content-Type": "application/json",
          },
      }).catch((err) => {
              console.log("Err: ", err);
      })
      .then((response) => response.json())
      .then((data) => setLoanCompany(data))
      .then((data) => console.log("here data is ", loanCompany))
    });
  };


  const handleToken = (token) => {
    retrieveCompany();
    console.log("Loan company is ", loanCompany);
    Auth.currentSession().then((res) => {
      // Persist the transaction.
      const compId = res.getIdToken().payload['cognito:groups'][0];
      // const queryString = objToQueryString({
      //   // id: employeeSkill.workPermitNumber,
      //     id: '29801093787290', 
      // });
      fetch('/api/employees/company' + ("/" + "29801093787290"), {
        headers: {
            'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
            Accept: "application/json",
        "Content-Type": "application/json",
        },
    })

      var dataFormatted = {
        "startDate" : startDate,
        "endDate" : endDate,
        "totalCost" : (totalCost/100).toFixed(2),
        "loanCompanyId" : loanCompany.uen,
        "borrowingCompanyId" : compId,
        "employeeId" : employeeSkill.workPermitNumber,  
        "status" : "Pending"
      };
      // console.log(JSON.stringify(dataFormatted));
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
      })
      //  .then(console.log(loanCompany));


      //Make the Stripe payment.
      fetch(`/api/payment/charge`, {
        method: "POST",
        headers: {
          'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': token.id,
          'amount': "" + {totalCost},

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
      amount={totalCost}
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