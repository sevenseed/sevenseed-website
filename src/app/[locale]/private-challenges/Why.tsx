import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { useTranslations } from "next-intl";
import Image from "next/image";
import networking from "@public/images/features/legal_entity.svg";

const Why = () => {
  const t = useTranslations("WhySevenSeed");

  const benefits = [
    t("benefit1"),
    t("benefit2"),
    t("benefit3"),
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-full sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image className="w-full flex-none rounded-2xl lg:h-auto lg:max-w-lg" alt="" src={networking} width={400} />
            <div className="w-full flex-auto">
              <h2 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
                {t("title")}
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-500">
                {t("description")}
              </p>
              <ul role="list" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none text-blue-700" />
                    <div className="text-slate-900">
                      {benefit}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        />
      </div>
    </div>
  );
};

export default Why;
