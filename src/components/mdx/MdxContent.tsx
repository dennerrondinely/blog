import 'highlight.js/styles/github-dark.css';

interface MdxContentProps {
  children: React.ReactNode;
}

export function MdxContent({ children }: MdxContentProps) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:font-bold prose-a:text-link hover:prose-a:text-link/80 prose-pre:bg-background-secondary prose-pre:border prose-pre:border-border [&_h1]:text-4xl [&_h1]:mb-8 [&_h1]:mt-12 [&_h2]:text-3xl [&_h2]:mb-6 [&_h2]:mt-10 [&_h3]:text-2xl [&_h3]:mb-4 [&_h3]:mt-8 [&_p]:text-lg [&_p]:leading-7 [&_p]:mb-6 [&_p_a]:text-slate-600 dark:[&_p_a]:text-slate-400 [&_p_a]:hover:text-slate-800 dark:[&_p_a]:hover:text-slate-300 [&_strong]:text-text-primary [&_strong]:font-semibold [&_ul]:my-6 [&_ul]:space-y-2 [&_ol]:my-6 [&_ol]:space-y-2 [&_li]:text-lg [&_li]:leading-7 [&_li]:marker:text-text-secondary [&_li>p]:my-2 [&_li>ul]:my-2 [&_li>ol]:my-2 [&_blockquote]:border-l-4 [&_blockquote]:border-link [&_blockquote]:pl-4 [&_blockquote]:italic [&_pre]:p-4 [&_code]:text-sm [&_code]:font-mono [&_code]:bg-background-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:before:content-none [&_code]:after:content-none [&_img]:rounded-lg [&_img]:shadow-lg [&_hr]:my-8 [&_hr]:border-border [&_hr+*:not([class])]:mt-8">
      {children}
    </article>
  );
}
