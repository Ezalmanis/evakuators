import { component$ } from "@builder.io/qwik";

import SvgImage from "../../../public/evacuator.svg?format=svg&jsx";

export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center">
    <div  class="inline-block mr-1">
      <SvgImage style={{ width: '64px', height: '64px' }} alt="Auto SOS 24 logo"/>
    </div>
  </span>
));
