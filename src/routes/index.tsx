import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";

import CallToAction from "~/components/widgets/CallToAction"



const gallery: string[] = Object.values(import.meta.glob('../../public/cars/*.{avif,jpg,jpeg,PNG,JPEG}', { eager: true})).map(
  (value) => (value as { default: string }).default
);
export default component$(() => {
  return (
    <>
      <Hero />
      <Features
        id={"Galerija"}
        highlight="Mūsu darbi"
        pictures={gallery}
      />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: "Evakuators",
  meta: [
    {
      name: "Evakuators",
      content: "Evakuatora pakalpojumi",
    },
  ],
};
