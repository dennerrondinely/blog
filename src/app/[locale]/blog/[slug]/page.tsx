import { getBlogPost, getTranslatedPost } from '@/utils/mdx';
import { MdxContent } from '@/components/mdx/MdxContent';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { PostLanguageSelector } from '@/components/language/PostLanguageSelector';
import { Tag } from '@/components/blog/Tag';
import { formatDate } from '@/utils/date';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getBlogPost(slug, locale);

  if (!post) {
    return {};
  }

  const { frontmatter } = post;
  const baseUrl = 'https://dennerrondinely.dev';
  const postUrl = `${baseUrl}/${locale}/blog/${slug}`;
  const ogImage = frontmatter.coverImage
    ? `${baseUrl}${frontmatter.coverImage}`
    : `${baseUrl}/og-default.jpg`;

  return {
    title: frontmatter.title,
    description: frontmatter.description || '',
    openGraph: {
      type: 'article',
      title: frontmatter.title,
      description: frontmatter.description || '',
      url: postUrl,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description || '',
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params;
  const t = await getTranslations('blog');

  const post = await getBlogPost(slug, locale);
  if (!post) {
    notFound();
  }
  const { content, frontmatter } = post;
  const translations = await getTranslatedPost(post);

  return (
    <main className="flex flex-col flex-1 items-start justify-between max-w-4xl w-full mx-auto px-5 py-16 z-10">
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
        {frontmatter.description && (
          <p className="text-text-secondary mb-4">{frontmatter.description}</p>
        )}
        {frontmatter.date && (
          <p className="text-text-secondary text-sm mb-8">
            {t('publishedOn', {
              date: formatDate(frontmatter.date, locale as 'en' | 'pt'),
            })}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mb-8">
          {frontmatter.tags?.map(tag => <Tag key={tag} name={tag} />)}
        </div>
        <MdxContent>{content}</MdxContent>
        <PostLanguageSelector translations={translations} currentLocale={locale} />
      </div>
    </main>
  );
}
