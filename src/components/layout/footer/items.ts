import { instagram, twitter, facebook, github, visa, mastercard, paypal, applePay, googlePay } from "@/public/img";

type itemsType = {
   label: string;
   href: string;
};

type socialsType = {
   src: string;
   href: string;
   title: string;
};

type cardsType = {
   src: string;
   title: string;
};

// Menu items
export const company: itemsType[] = [
   { label: "Home", href: "/" },
   { label: "Products", href: "/products" },
   { label: "About us", href: "/about" },
   { label: "Contact", href: "/contact" },
];

export const help: itemsType[] = [
   { label: "Privacy policy", href: "/privacy" },
   { label: "Refund policy", href: "/refund" },
   { label: "Terms of service", href: "/terms" },
   { label: "Contact information", href: "/contact" },
];

export const faq: itemsType[] = [
   { label: "Shipping policy", href: "/shipping" },
   { label: "Payment methods", href: "/payment" },
   { label: "Custom orders", href: "/custom" },
   { label: "Size guide", href: "/size-guide" },
];

export const resources: itemsType[] = [
   { label: "Gallery", href: "/gallery" },
   { label: "Design inspiration", href: "/inspiration" },
   { label: "Installation guide", href: "/installation" },
   { label: "Care instructions", href: "/care" },
];

// Social
export const social: socialsType[] = [
   { title: "Twitter", src: twitter, href: "/" },
   { title: "Facebook", src: facebook, href: "/" },
   { title: "Instagram", src: instagram, href: "/" },
   { title: "Github", src: github, href: "/" },
];

export const cards: cardsType[] = [
   { src: visa, title: "Visa" },
   { src: mastercard, title: "MasterCard" },
   { src: paypal, title: "PayPal" },
   { src: applePay, title: "Apple Pay" },
   { src: googlePay, title: "Google Pay" },
];
