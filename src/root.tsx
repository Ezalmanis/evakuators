import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { RouterHead } from "~/components/common/RouterHead";
import { DarkThemeLauncher } from "~/components/common/DarkThemeLauncher";

// import "@fontsource-variable/inter";
import styles from "~/assets/styles/global.css?inline";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  useStyles$(styles);

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Evakuatora pakalpojumi" />
        <meta
          name="keywords"
          content="Auto ar piekabi transportēšana,
Auto atvēršana,
Auto evakuatora pakalpojumi,
Auto evakuators,
Auto evakuācija,
Auto evakuēšana Rīga
Auto evakuēšana,
AUTO HELP,
Auto palīdzība uz ceļa,
Auto palīdzība uz ceļa, uz ielas, uz šosejas
Auto pārvietošana,
Auto piestartēšana,
Auto remonts uz ceļa,
Auto tehniskā palīdzība
Auto tehniskā palīdzība uz ceļa,
Auto transportēšana ar treileriem,
Auto transportēšana Latvijā,
Auto transportēšana,
Auto vedējs,
Autoevakuatora palīdzība,
Autoevakuatori un tehniskā palīdzība uz ceļa,
Autoevakuators Latvija,
Autoevakuators,
Autoevakuācija Baltija
Autoevakuācija,
Automašīnas durvju atvēršana
Automašīnu durvju atvēršana,
Automašīnu evakuācija,
Automašīnu ievilkšana,
Automašīnu izvilkšana no grāvja,
Automašīnu labošana uz ceļa ( pēc situācijas),
Automašīnu labošana uz ceļa,
Automašīnu pārvietošana,
Automašīnu transportēšana,
Automobiļu atvēršana,
Automobiļu transportēšana,
Autopalīdzība Rīga,
Avarējušu automašīnu evakuācija,
Avarējušu, pēc avārijas automašīnu transportēšana, pārvietošana, vilkšana,
avārijas izsaukums,
Bezceļa evakuācija 00-24,
Bojātu auto evakuācija,
Bojātu auto evakuācija,
Bojātu auto uzglabāšana,
Bojātu automašīnu transportēšana,
Celtniecības tehnikas transportēšana,
Specializētā celtniecības tehnikas transportēšana
Diennakts auto evakuācija,
Diennakts auto palīdzība,
Diennakts auto SOS palīdzība,
Diennakts autoevakuators,
Diennakts autoevakuācija,
Diennakts SOS evakuators autoevakuācija,
Diennakts SOS,
Diennakts tehniskā palīdzība uz ceļa,
Dzinēja piestartēšana,
Evakuatora pakalpojumi,
Evakuatora palīdzība,
Evakuatora, autoevakuatora pakalpojumi,
Evakuators,
Evakuācija pēc avārijas,
Evakuācija,
Iestigušu mašīnu izvilkšana,
Izvilkšana no grāvja, bedres,
Laba cena automašīnu transportēšanai,
Lauzti riteņi,
Mikroautobusi, busu, mikroautobusu transportēšana,
Motocikli, skūteri, mopēdi, motociklu, skūteru, mopēdu transportēšana,
Nogādāšana mājās, servisā, birojā, stāvlaukumā,
Nolauzti rīteņi,
Palīdzība avārijas gadījumos,
Palīdzība uz ceļa, 
Pilnā auto novietošana uz platformas,
SOS autoevakuators,
SOS diennakts tehniskā palīdzība uz ceļa,
SOS diennakts tehniskā palīdzība uz ceļa, ielas, šosejas, autostrādes ( ceļā ), izbraukumā,
SOS diennakts tehniskā palīdzība uz ceļa, ielas, šosejas, autostrādes,ceļā,
SOS evakuators, 
SOS palīdzība uz ceļa,
SOS palīdzība, tehniskā palīdzība ceļā,
Speciālās un lauksaimniecības tehnikas transportēšana,
Tehnika palīdzība uz ielas
Tehniskā palīdzība ceļā,
Transporta līdzekļu evakuācija,
Transporta līdzekļu transportēšana,
Transporta līdzekļu vilkšana
Transporta līdzekļu transportēšana,
Transporta pārvietošana,
Transportēšana,
Veicam visa veida evakuāciju no mežiem, purviem, pļavām, ūdens tilpnēm,
Vieglās automašīnas, miniveni, apvidus automašīnas, džipi,
Vieglo automašīnu, minivenu, apvidus automašīnu transportēšana, džipu
Visā Latvijā,
Zemais evakuators"
        />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body class="bg-white tracking-tight text-gray-900 antialiased dark:bg-gray-900 dark:text-slate-300">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
