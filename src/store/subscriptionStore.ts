import { create } from "zustand";

interface SubscriptionStoreType {
  subscriptionType: "free" | "hobby" | "pro" | "enterprise";
}
