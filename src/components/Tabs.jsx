/* eslint-disable react/prop-types */
import { classNames } from "../lib/utils";

export default function Tabs({ tabs, value, defaultValue, onChange }) {
  return (
    <nav className="flex space-x-1 bg-gray-50 p-1.5 rounded" aria-label="Tabs">
      {tabs.map((tab) => {
        const current = tab.value === (value ?? defaultValue);

        return (
          <button
            key={tab.name}
            href={tab.href}
            className={classNames(
              current
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:text-gray-700",
              "rounded-md p-2 text-sm font-medium h-10"
            )}
            onClick={() => onChange(tab.value)}
          >
            {tab.name}
          </button>
        );
      })}
    </nav>
  );
}
