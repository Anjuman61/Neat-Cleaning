import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id)
            console.log('[PaymentMethod]', paymentMethod);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-info mt-3' type="submit" disabled={!stripe}>
                    Confirm Payment
                 </button>
            </form>
            {
                paymentError && <p style={{color:'red'}}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{color:'green'}}>Payment completed Successfully</p>
            }
        </div>
    );
};

export default CheckoutForm;