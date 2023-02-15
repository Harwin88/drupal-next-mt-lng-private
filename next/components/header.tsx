import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { LanguageSwitcher } from "@/components/language-switcher";
import { MainMenu } from "@/components/main-menu";
import MagnifierIcon from "@/styles/icons/magnifier.svg";
import WunderIcon from "@/styles/icons/wunder.svg";
import { DrupalMenuLinkContentWithLangcode } from "@/types";

interface HeaderProps {
  links: DrupalMenuLinkContentWithLangcode[];
}

export function Header({ links }: HeaderProps) {
  return (
    <header className="z-50 flex-shrink-0 border-b bg-white text-wunderpurple-700 md:sticky md:top-0">
      <nav className="mx-auto flex max-w-6xl flex-row items-center justify-between px-6 py-4">
        <HomeLink />
        <div className="flex flex-row items-center justify-end gap-8">
          <LanguageSwitcher />
          <SearchLink />
          <MainMenu items={links} />
        </div>
      </nav>
    </header>
  );
}

function HomeLink() {
  const { locale } = useRouter();
  const { t } = useTranslation();
  return (
    <Link href="/" locale={locale} className="inline">
      <WunderIcon className="w-32" />
      <span className="sr-only">{t("homepage-link")}</span>
    </Link>
  );
}

function SearchLink() {
  const { locale } = useRouter();
  const { t } = useTranslation();
  return (
    <Link href="/search" locale={locale} className="hover:underline">
      <span className="hidden sm:mr-2 sm:inline">{t("search")}</span>
      <MagnifierIcon className="inline-block h-6 w-6" />
    </Link>
  );
}