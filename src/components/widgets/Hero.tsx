import {component$} from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import HeroImage from "/src/images/cars/varonis.avif"
import Stats from "~/components/widgets/Stats";

const coverImage = HeroImage;

interface LocationProps {
  x?: number;
  y?: number;
}


function scrollToGallery() {
  const div = document.getElementById("Galerija");

  const {x, y}:LocationProps = div!=null? {x:div.getBoundingClientRect().x, y:div.getBoundingClientRect().y-20} : {x:0,y:0}

      window.scrollTo({
      top: y,
      left: x,
      behavior: "smooth",
    });
}

export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] lg:-mt-[80px] not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
            <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
              <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
                <span class="sm:whitespace-nowrap text-secondary-600">Autoevakuators</span>
                <br class="hidden lg:block"/>{" "}
                <span class="hidden lg:inline">+371 2235 8845</span>{" "}
                <span></span>{" "}
              </h1>
              <div class="max-w-3xl mx-auto lg:max-w-none">
                <p class="text-xl text-muted mb-6 dark:text-slate-300">
                <span
                    class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                </span>{" "}
                  Piedāvājam plaša klāsta evakuācijas pakalpojumus.{" "}
                </p>

                <div
                    class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
                  <div class="flex w-full sm:w-auto">
                    <button
                        class="btn btn-primary sm:mb-0 w-full text-center"
                        onClick$={() => scrollToGallery()}
                    >
                      Galerija
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                  fetchpriority={'high'}
                  width={640}
                  src={coverImage}
                  layout="constrained"
                  alt="Bilde ar evakuatoru"
                  class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
                  priority={true}
              />
              <Stats/>
          </div>
        </div>

      </div>
    </section>
  );
});
