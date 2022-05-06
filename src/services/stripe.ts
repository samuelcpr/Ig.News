// aquivo que vai definir a conexão com a API do stri


import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY, 
  {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "Ignews",
   
  },
 }
);


//essa é a rota existente nesse código 

// stripe.checkout.sessions.create
