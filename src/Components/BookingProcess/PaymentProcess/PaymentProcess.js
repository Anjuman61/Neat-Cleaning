import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51IeGX0JKn4PmuTOZWT6D81b09XOblJyuVMQdYkRm7nDhsrWLwrFkY9rDQ03oVgviusUXY6uZThJ4mGIX2LMDlzDn00TEspKkJV');

const PaymentProcess = ({handlePayment}) => {

    return (
       
            <Elements stripe={stripePromise}>
                <CheckoutForm handlePayment={handlePayment}></CheckoutForm>
            </Elements>
    );
};

export default PaymentProcess;