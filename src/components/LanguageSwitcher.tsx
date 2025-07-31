"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const locales = [
  { code: "uk", label: "UA", icon: "/images/flags/ua.svg" },
  { code: "ro", label: "RO", icon: "/images/flags/ro.svg" },
  { code: "en", label: "EN", icon: "/images/flags/en.svg" },
  { code: "ru", label: "RU", icon: "/images/flags/ru.svg" },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLang =
    locales.find(({ code }) => pathname.startsWith(`/${code}`)) || locales[0];

  const switchLanguage = (newCode: string) => {
    const newPath = pathname.replace(/^\/\w+/, `/${newCode}`);
    router.push(newPath);
    document.cookie = `NEXT_LOCALE=${newCode}; path=/; max-age=31536000`;
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <img
          src={currentLang.icon}
          alt={currentLang.label}
          width={24}
          height={24}
        />
        <svg className="w-4 h-4" viewBox="0 0 20 20">
          <path d="M5 8l5 5 5-5z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute bg-white border rounded shadow-md top-full mt-2 z-10">
          {locales.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full"
            >
              <img src={lang.icon} alt={lang.label} width={20} height={20} />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
