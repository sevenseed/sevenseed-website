import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useTranslations } from "next-intl";

const Solutions = () => {
  const t = useTranslations("Grants-solutions");

  const solutionKeys = [
    { key: "solution", icon: InboxIcon },
    { key: "solution2", icon: TrashIcon },
    { key: "solution3", icon: UsersIcon },
    { key: "solution4", icon: InboxIcon },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col ">
        <div className="max-w-2xl lg:mx-0 ">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 ">
          {t("title")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          {t("subtitle")}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {solutionKeys.map((solution, index) => (
              <div key={index} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                    <solution.icon className="h-6 w-6 text-white" /> 
                  </div>
                  {t(`${solution.key}.name`)}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-sm leading-7 text-gray-600">
                  <p className="flex-auto">{t(`${solution.key}.description`)}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
