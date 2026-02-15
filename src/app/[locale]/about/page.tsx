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
    <main className="flex flex-col flex-1 items-start justify-between max-w-4xl w-full mx-auto px-5 py-16">
      <div className="w-full">
        <PageHeader title={t('title')} description={t('subtitle')} />

        {/* Introdução */}
        <section className="mb-12">
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            {t('intro')}
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            {t('philosophy')}
          </p>
        </section>

        {/* Jornada */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">🚀 {t('journey.title')}</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            {t('journey.description')}
          </p>
          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{t('journey.skill1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{t('journey.skill2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{t('journey.skill3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{t('journey.skill4')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{t('journey.skill5')}</span>
            </li>
          </ul>
          <p className="text-text-secondary leading-relaxed mt-6">
            {t('journey.goal')}
          </p>
        </section>

        {/* Pilares */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">☕ {t('pillars.title')}</h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            {t('pillars.intro')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-lg bg-secondary">
              <h3 className="text-xl font-semibold mb-2">💻 {t('pillars.code.title')}</h3>
              <p className="text-text-secondary">{t('pillars.code.description')}</p>
            </div>
            <div className="p-6 rounded-lg bg-secondary">
              <h3 className="text-xl font-semibold mb-2">☕ {t('pillars.coffee.title')}</h3>
              <p className="text-text-secondary">{t('pillars.coffee.description')}</p>
            </div>
            <div className="p-6 rounded-lg bg-secondary">
              <h3 className="text-xl font-semibold mb-2">🔍 {t('pillars.curiosity.title')}</h3>
              <p className="text-text-secondary">{t('pillars.curiosity.description')}</p>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed">
            {t('pillars.description')}
          </p>
        </section>

        {/* Conteúdo do Blog */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">🛠 {t('content.title')}</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            {t('content.intro')}
          </p>

          <ul className="space-y-3 text-text-secondary mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>{t('content.topic1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>{t('content.topic2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>{t('content.topic3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>{t('content.topic4')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>{t('content.topic5')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>{t('content.topic6')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>{t('content.topic7')}</span>
            </li>
          </ul>

          <div className="p-6 rounded-lg bg-secondary border border-primary/20">
            <p className="text-center font-semibold mb-2">{t('content.approach')}</p>
            <p className="text-center text-text-secondary italic">{t('content.promise')}</p>
          </div>
        </section>

        {/* Além do Código */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">🌱 {t('beyond.title')}</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            {t('beyond.intro')}
          </p>

          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{t('beyond.interest1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{t('beyond.interest2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{t('beyond.interest3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>{t('beyond.interest4')}</span>
            </li>
          </ul>

          <p className="text-text-secondary leading-relaxed mt-6">
            {t('beyond.belief')}
          </p>
        </section>

        {/* Conectar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">🤝 {t('connect.title')}</h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            {t('connect.description')}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/dennerrondinely"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:opacity-90 transition-opacity font-medium"
            >
              <GitHubLogoIcon className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dennerrondinely"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:opacity-90 transition-opacity font-medium"
            >
              <LinkedInLogoIcon className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/dennerrondinely"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:opacity-90 transition-opacity font-medium"
            >
              <InstagramLogoIcon className="w-5 h-5" />
              Instagram
            </a>
          </div>

          <p className="text-text-secondary leading-relaxed mt-8">
            {t('connect.projects')}
            <Link href="/projects" className="text-primary hover:underline ml-1">
              {t('connect.projectsLink')}
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
