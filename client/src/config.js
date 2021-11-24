import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";

export const API_URL = "https://nk1qmqlk97.execute-api.us-east-1.amazonaws.com/dev";

export const stripePromise = loadStripe("pk_test_51Js0m8SIbQpOCQtjmieU3Yne1pBBhPTAaGGsDkXuUB7HtMD0QhX8DRRIgGmNg7KCIy7zlzbsxYW2ipVzfB3uSJed00y0QcqrMW")

export const api = axios.create({
    baseURL: API_URL,
});