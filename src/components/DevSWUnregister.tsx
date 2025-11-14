"use client";

import { useEffect } from "react";

export default function DevSWUnregister() {
   useEffect(() => {
      if (process.env.NODE_ENV !== "development") return;

      if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
         navigator.serviceWorker.getRegistrations?.().then((registrations) => {
            registrations.forEach((registration) => registration.unregister());
         });
      }

      if (typeof caches !== "undefined" && typeof caches.keys === "function") {
         caches.keys().then((keys) => {
            keys.forEach((key) => {
               caches.delete(key);
            });
         });
      }
   }, []);

   return null;
}


