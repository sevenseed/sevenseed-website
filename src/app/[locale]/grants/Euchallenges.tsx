import Image from "next/image";
import { useTranslations } from "next-intl";

import european from "@public/images/features/European.svg";
import strategic from "@public/images/features/Strategic.svg";


const Euchallenges = () => {
  const t = useTranslations("Grants-euchallanges");
  return (
    <div className=" py-24 sm:py-32">
    <div className="mx-auto max-w-2xl  lg:max-w-7xl lg:px-8">
      <p className="font-display text-4xl lg:text-5xl font-extrabold text-center">
      {t("title")}
      </p>
      <div className=" grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <div className="relative lg:row-span-2">
          <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem] "></div>
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)] ">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 ">
              <p className="mt-2 text-3xl lg:text-lg/7 font-medium tracking-tight text-blue-700 max-lg:text-center">
              {t("euchallenge.name")}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              {t("euchallenge.description")}
              </p>
            </div>
            <div className="flex justify-center">

            <Image alt="" src={european} width={350}></Image>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
        </div>
        <div className="relative max-lg:row-start-1">
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-3xl lg:text-lg/7 font-medium tracking-tight text-blue-700 max-lg:text-center ">
              {t("euchallenge2.name")}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              {t("euchallenge2.description")}
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2 mt-4">
            
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
        </div>
        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div className="absolute inset-px rounded-lg bg-white"></div>
          <div className="relative flex h-50 flex-col justify-between overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-3xl lg:text-lg/7 font-medium tracking-tight text-blue-700 max-lg:text-center">{t("euchallenge3.name")}</p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              {t("euchallenge3.description")}
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center [container-type:inline-size] max-lg:py-6 lg:pb-2 mt-4">
            
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>
        <div className="relative lg:row-span-2">
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div className="relative flex h-full flex-col justify-center content-center items-center justify-items-start  overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p className="mt-2 text-3xl lg:text-lg/7 font-medium tracking-tight text-blue-700 max-lg:text-center">
              {t("euchallenge4.name")}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              {t("euchallenge4.description")}
              </p>
            </div>
            <div className="relative min-h-[10rem] w-full grow flex justify-center pb-4">
              
            <Image alt="" src={strategic} width={350}></Image>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Euchallenges