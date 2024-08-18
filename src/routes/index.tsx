import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";

import CallToAction from "~/components/widgets/CallToAction";


import { SITE } from "~/config.mjs";
// @ts-ignore
const gallery: string[] = Object.values(import.meta.glob('../../src/images/cars/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true})).map(value => value.default.replace('/public/', '/'));
export default component$(() => {
  return (
    <>
      <Hero />
      <Features
        id={"Galerija"}
        highlight="Mūsu darbi"
        subtitle="Šī ir tikai daļa no mūsu pārvestajiem aparātiem"
        pictures={gallery}
      />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
