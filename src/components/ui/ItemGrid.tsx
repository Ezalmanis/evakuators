import { twMerge } from "tailwind-merge";
import {Image} from "@unpic/qwik";

interface Props {
  pictures?: any[];
  classes?: Record<string, string>;
}

export const ItemGrid = (props: Props) => {
  const { pictures = [], classes = {} } = props;

  const {
    container: containerClass = "md:grid-cols-2",
    panel: panelClass = "",
  } = classes as Record<string, string>;

    return (
    pictures.length && (
      <div class={twMerge("grid mx-auto gap-8", containerClass)}>
        {pictures.map((value, index) => (
          <div key={`${index}`}>
            <div class={twMerge("flex flex-row justify-center", panelClass)}>
                <Image
                    width={380}
                    decoding={"async"}
                    loading={'lazy'}
                    src={value}
                    layout="constrained"
                    alt="Bilde ar evakuatoru"
                    class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
                    priority={true}
                />
            </div>
          </div>
        ))}
      </div>
    )
  );
};
