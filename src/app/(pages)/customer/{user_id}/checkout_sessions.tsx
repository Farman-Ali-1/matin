// import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// const db = getFirestore();
// const auth = getAuth();

// const createCheckoutSession = async () => {
//   const user = auth.currentUser;
//   if (!user) return;

//   const docRef = await addDoc(
//     collection(db, `customers/${user.uid}/checkout_sessions`),
//     {
//       price: 'price_XXXXXX', // Your Stripe Price ID
//       success_url: window.location.origin + "/success",
//       cancel_url: window.location.origin + "/cancel",
//     }
//   );

//   // Listen for checkout session ID
//   onSnapshot(docRef, (snap) => {
//     const { sessionId } = snap.data() || {};
//     if (sessionId) {
//       const stripe = window.Stripe('pk_test_XXXX'); // Your Stripe public key
//       stripe.redirectToCheckout({ sessionId });
//     }
//   });
// };

// export default createCheckoutSession;