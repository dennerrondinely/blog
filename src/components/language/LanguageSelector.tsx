import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface LanguageSelectorProps {
  'data-testid'?: string;
}

export function LanguageSelector({ 'data-testid': dataTestId }: LanguageSelectorProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('languageSelector');

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        data-testid={dataTestId}
        className="inline-flex items-center justify-center px-4 h-9 min-w-[70px] text-button-secondary-text bg-button-secondary-bg rounded-md hover:bg-button-hover"
      >
        {t(`languages.${locale}`)}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 p-1 min-w-[120px] overflow-hidden text-foreground rounded-md border-border shadow-md animate-in border data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        >
          <DropdownMenu.Item
            data-testid="language-option-en"
            className="flex items-center px-3 py-2 w-full text-sm rounded-sm outline-none transition-colors cursor-pointer select-none relative hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            onClick={() => handleLocaleChange('en')}
          >
            {t('languages.en')}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            data-testid="language-option-pt"
            className="flex items-center px-3 py-2 w-full text-sm rounded-sm outline-none transition-colors cursor-pointer select-none relative hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            onClick={() => handleLocaleChange('pt')}
          >
            {t('languages.pt')}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
