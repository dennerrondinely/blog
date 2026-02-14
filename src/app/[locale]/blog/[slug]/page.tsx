import { getBlogPost, getTranslatedPost } from '@/utils/mdx';
import { MdxContent } from '@/components/mdx/MdxContent';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { PostLanguageSelector } from '@/components/language/PostLanguageSelector';
import { Tag } from '@/components/blog/Tag';
import { formatDate } from '@/utils/date';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
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

  // Monta a URL absoluta do post
  const baseUrl = 'https://dennerrondinely.dev';
  const postUrl = `${baseUrl}/${locale}/blog/${slug}`;
  const ogImage = frontmatter.coverImage ? `${baseUrl}${frontmatter.coverImage}` : `${baseUrl}/og-default.jpg`;

  return (
    <>
      <head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description || ''} />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description || ''} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={ogImage} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.description || ''} />
        <meta name="twitter:image" content={ogImage} />
      </head>
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
    </>
  );
}
