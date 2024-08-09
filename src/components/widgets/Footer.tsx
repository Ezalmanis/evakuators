import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const links = [
    {
      title: "Privātums",
      items: [
        { title: "Privātuma politika", href: "/privacy" }
      ],
    },
    {
      title: "Kontakti",
      items: [
        { title: "Telefons | +371 22358845", href: "tel:+37122358845" },
        {title: "Epasts | epasts@epasts.lv"}
      ],


    }
  ];

  return (
    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 py-8 sm:gap-8 md:py-12">
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="mb-2 font-medium text-gray-800 dark:text-gray-300">
                {title}
              </div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class="mb-2">
                      <Link
                        class="text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 hover:underline dark:text-gray-400"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="py-6 md:flex md:items-center md:justify-between md:py-8">

          <div class="mr-4 text-sm text-gray-700 dark:text-slate-400">
            <span class="text-sm text-gray-600 dark:text-gray-400">
              Visas tiesības aizsargātas ©2024 SIA Uznemums
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
});
