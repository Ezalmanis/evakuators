import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
      <section class="relative">
        <div class="justify-items-center px-4 py-8 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:py-20 max-w-7xl">
          <div class="grid grid-cols-2 row-gap-8 md:grid-cols-2">
            <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
              <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#039de1] font-heading">
                33 t
              </div>
              <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
                Maksimālā tonnāža
              </p>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#039de1]">
                24/7
              </div>
              <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
                Darba laiks
              </p>
            </div>
          </div>
        </div>
      </section>
  );
});
