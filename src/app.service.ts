import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async payment(amount: number) {
    const stripe = require('stripe')(
      'sk_test_51Kz13ZIAcelJQbvPHMzC2uXMEwZHLwBiPCU0IK962ksZlQQjfKOlPcu4w69FwK98UCvqTiKJM6XMiQVoDySE7PeK00B5jXImNa',
    );

    // const PaymentMethod = stripe.PaymentMethod.create({
    //   type: 'card',
    //   card: {
    //     number: '4242424242424242',
    //     exp_month: 12,
    //     exp_year: 2023,
    //     cvc: '314',
    //   },

    // });

    const paymentIntent = await stripe.charges.create(
      {
        amount: amount,
        currency: 'eur',
        // payment_method:'pm_card_visa',
        source: 'tok_amex'
      },
      {
        stripeAccount: 'acct_1Kz13ZIAcelJQbvP',
      },
    );
    return paymentIntent;
  }
}
