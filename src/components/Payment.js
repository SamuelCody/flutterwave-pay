import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import "./Payment.css";
import { useAlert } from "react-alert";

function Payment() {
  const amountRef = useRef("");
  const alert = useAlert();
  const [amount, setAmount] = useState("");
  const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    currency: "USD",
    payment_options: "card,mobilemoney",
    customer: {
      email: "sam@gmail.com",
      phonenumber: "08093327798",
      name: "Ayinde Samuel",
    },
    customizations: {
      title: "Payment",
      description: "Payment with Flutterwave",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave({
    ...config,
    amount: amountRef.current.value,
  });

  return (
    <div className="center">
      <h1>Payment</h1>
      <form>
        <div className="inputbox">
          <input
            ref={amountRef}
            onChange={() => {
              setAmount(amountRef.current.value);
            }}
            type="number"
            min={10}
            step={5}
            required="required"
          />
          <span>Pay minimum of $10</span>
        </div>
        <div className="inputbox">
          <input
            type="button"
            value="Pay"
            onClick={
              amount
                ? () => {
                    handleFlutterPayment({
                      callback: (response) => {
                        console.log(response);
                        closePaymentModal(); // this will close the modal programmatically
                        amountRef.current.value = "";
                        alert.success("Payment successful");
                      },
                      onClose: () => {
                        amountRef.current.value = "";
                        alert.error("Payment not successful");
                      },
                    });
                  }
                : () => {
                    alert.error("Invalid Amount");
                  }
            }
          />
        </div>
        <div className="inputbox">
          <Link to="/logout">
            <input type="submit" value="Logout" />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Payment;
