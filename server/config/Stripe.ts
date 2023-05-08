import Stripe from 'stripe';
import { getStripeKey } from './Environment';

export const stripe = new Stripe(getStripeKey().secret as string, {
    apiVersion: "2022-11-15"
});