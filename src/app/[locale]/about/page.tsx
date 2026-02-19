import { setRequestLocale } from 'next-intl/server';
import { PageHeader } from '@/components/ui/PageHeader';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <main className="flex flex-col flex-1 items-start justify-between mx-auto px-5 py-16 max-w-4xl w-full">
      <div className="w-full">
        <PageHeader title={t('title')} description={t('subtitle')} />

        {/* Introdução */}
        <section className="mb-12">
          <p className="mb-4 text-lg text-text-secondary leading-relaxed">{t('intro')}</p>
          <p className="text-lg text-text-secondary leading-relaxed">{t('philosophy')}</p>
        </section>

        {/* Jornada */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">🚀 {t('journey.title')}</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">{t('journey.description')}</p>
          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <span>{t('journey.skill1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <span>{t('journey.skill2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <span>{t('journey.skill3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <span>{t('journey.skill4')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <span>{t('journey.skill5')}</span>
            </li>
          </ul>
          <p className="mt-6 text-text-secondary leading-relaxed">{t('journey.goal')}</p>
        </section>

        {/* Pilares */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">☕ {t('pillars.title')}</h2>
          <p className="mb-8 text-text-secondary leading-relaxed">{t('pillars.intro')}</p>

          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="mb-2 text-xl font-semibold">💻 {t('pillars.code.title')}</h3>
              <p className="text-text-secondary">{t('pillars.code.description')}</p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="mb-2 text-xl font-semibold">☕ {t('pillars.coffee.title')}</h3>
              <p className="text-text-secondary">{t('pillars.coffee.description')}</p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="mb-2 text-xl font-semibold">🔍 {t('pillars.curiosity.title')}</h3>
              <p className="text-text-secondary">{t('pillars.curiosity.description')}</p>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed">{t('pillars.description')}</p>
        </section>

        {/* Conteúdo do Blog */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">🛠 {t('content.title')}</h2>
          <p className="mb-6 text-text-secondary leading-relaxed">{t('content.intro')}</p>

          <ul className="space-y-3 mb-6 text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>{t('content.topic1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>{t('content.topic2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>{t('content.topic3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>{t('content.topic4')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>{t('content.topic5')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>{t('content.topic6')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>{t('content.topic7')}</span>
            </li>
          </ul>

          <div className="p-6 bg-secondary rounded-lg border-primary/20 border">
            <p className="mb-2 text-center font-semibold">{t('content.approach')}</p>
            <p className="text-center text-text-secondary italic">{t('content.promise')}</p>
          </div>
        </section>

        {/* Além do Código */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">🌱 {t('beyond.title')}</h2>
          <p className="mb-6 text-text-secondary leading-relaxed">{t('beyond.intro')}</p>

          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <span>{t('beyond.interest1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <span>{t('beyond.interest2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <span>{t('beyond.interest3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <span>{t('beyond.interest4')}</span>
            </li>
          </ul>

          <p className="mt-6 text-text-secondary leading-relaxed">{t('beyond.belief')}</p>
        </section>

        {/* Conectar */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">🤝 {t('connect.title')}</h2>
          <p className="mb-8 text-text-secondary leading-relaxed">{t('connect.description')}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/dennerrondinely"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-medium bg-primary rounded-lg transition-opacity hover:opacity-90"
            >
              <GitHubLogoIcon className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dennerrondinely"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-medium bg-primary rounded-lg transition-opacity hover:opacity-90"
            >
              <LinkedInLogoIcon className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/dennerrondinely"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-medium bg-primary rounded-lg transition-opacity hover:opacity-90"
            >
              <InstagramLogoIcon className="w-5 h-5" />
              Instagram
            </a>
          </div>

          <p className="mt-8 text-text-secondary leading-relaxed">
            {t('connect.projects')}
            <Link href="/projects" className="ml-1 text-primary hover:underline">
              {t('connect.projectsLink')}
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
