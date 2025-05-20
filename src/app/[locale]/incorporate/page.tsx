"use client";

import { useSearchParams } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Hero from "@/components/layout/Hero";
import Introduction from "@/components/layout/Introduction";
import Features from "@/components/layout/Features";
import Testimonials from "@/components/layout/Testimonials";
import Pricing from "@/components/layout/Pricing";
import GetStarted from "@/components/layout/GetStarted";

// Import all your messages
import enMessages from "../../../../messages/en.json";
import frMessages from "../../../../messages/fr.json";
import nlMessages from "../../../../messages/nl.json";

const messagesMap = {
  en: enMessages,
  fr: frMessages,
  nl: nlMessages,
};

export default function Incorporate() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
const messages = messagesMap[lang as keyof typeof messagesMap] || enMessages;


  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      <main className="flex flex-col gap-y-16 px-8 mb-8">
        <Hero />
        <Introduction />
        <Features />
        <Testimonials />
        <Pricing />
        <GetStarted />
      </main>
    </NextIntlClientProvider>
  );
}
