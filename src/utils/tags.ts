type TagColor = {
  background: string;
  text: string;
};

const tagColors: Record<string, TagColor> = {
  react: {
    background: 'bg-blue-100 dark:bg-blue-900',
    text: 'text-blue-800 dark:text-blue-100',
  },
  typescript: {
    background: 'bg-blue-100 dark:bg-blue-900',
    text: 'text-blue-800 dark:text-blue-100',
  },
  javascript: {
    background: 'bg-yellow-100 dark:bg-yellow-900',
    text: 'text-yellow-800 dark:text-yellow-100',
  },
  nextjs: {
    background: 'bg-gray-100 dark:bg-gray-900',
    text: 'text-gray-800 dark:text-gray-100',
  },
  architecture: {
    background: 'bg-purple-100 dark:bg-purple-900',
    text: 'text-purple-800 dark:text-purple-100',
  },
  design: {
    background: 'bg-pink-100 dark:bg-pink-900',
    text: 'text-pink-800 dark:text-pink-100',
  },
  testing: {
    background: 'bg-green-100 dark:bg-green-900',
    text: 'text-green-800 dark:text-green-100',
  },
  performance: {
    background: 'bg-red-100 dark:bg-red-900',
    text: 'text-red-800 dark:text-red-100',
  },
  accessibility: {
    background: 'bg-indigo-100 dark:bg-indigo-900',
    text: 'text-indigo-800 dark:text-indigo-100',
  },
  security: {
    background: 'bg-orange-100 dark:bg-orange-900',
    text: 'text-orange-800 dark:text-orange-100',
  },
  vscode: {
    background: 'bg-teal-100 dark:bg-teal-900',
    text: 'text-teal-800 dark:text-teal-100',
  },
  theme: {
    background: 'bg-cyan-100 dark:bg-cyan-900',
    text: 'text-cyan-800 dark:text-cyan-100',
  },
  automation: {
    background: 'bg-emerald-100 dark:bg-emerald-900',
    text: 'text-emerald-800 dark:text-emerald-100',
  },
  'github-actions': {
    background: 'bg-violet-100 dark:bg-violet-900',
    text: 'text-violet-800 dark:text-violet-100',
  },
  tema: {
    background: 'bg-cyan-100 dark:bg-cyan-900',
    text: 'text-cyan-800 dark:text-cyan-100',
  },
  automação: {
    background: 'bg-emerald-100 dark:bg-emerald-900',
    text: 'text-emerald-800 dark:text-emerald-100',
  },
  'engenharia-de-software': {
    background: 'bg-purple-100 dark:bg-purple-900',
    text: 'text-purple-800 dark:text-purple-100',
  },
  'software-engineering': {
    background: 'bg-purple-100 dark:bg-purple-900',
    text: 'text-purple-800 dark:text-purple-100',
  },
  'boas-práticas': {
    background: 'bg-pink-100 dark:bg-pink-900',
    text: 'text-pink-800 dark:text-pink-100',
  },
  'best-practices': {
    background: 'bg-pink-100 dark:bg-pink-900',
    text: 'text-pink-800 dark:text-pink-100',
  },
  'code-review': {
    background: 'bg-green-100 dark:bg-green-900',
    text: 'text-green-800 dark:text-green-100',
  },
  dev: {
    background: 'bg-blue-100 dark:bg-blue-900',
    text: 'text-blue-800 dark:text-blue-100',
  },
  agile: {
    background: 'bg-lime-100 dark:bg-lime-900',
    text: 'text-lime-800 dark:text-lime-100',
  },
  scrum: {
    background: 'bg-amber-100 dark:bg-amber-900',
    text: 'text-amber-800 dark:text-amber-100',
  },
  dor: {
    background: 'bg-sky-100 dark:bg-sky-900',
    text: 'text-sky-800 dark:text-sky-100',
  },
  dod: {
    background: 'bg-rose-100 dark:bg-rose-900',
    text: 'text-rose-800 dark:text-rose-100',
  },
  'software-development': {
    background: 'bg-slate-100 dark:bg-slate-900',
    text: 'text-slate-800 dark:text-slate-100',
  },
  nodejs: {
    background: 'bg-green-100 dark:bg-green-900',
    text: 'text-green-800 dark:text-green-100',
  },
  'deep-links': {
    background: 'bg-fuchsia-100 dark:bg-fuchsia-900',
    text: 'text-fuchsia-800 dark:text-fuchsia-100',
  },
  mobile: {
    background: 'bg-indigo-100 dark:bg-indigo-900',
    text: 'text-indigo-800 dark:text-indigo-100',
  },
  express: {
    background: 'bg-zinc-100 dark:bg-zinc-900',
    text: 'text-zinc-800 dark:text-zinc-100',
  },
  'state-management': {
    background: 'bg-orange-100 dark:bg-orange-900',
    text: 'text-orange-800 dark:text-orange-100',
  },
  zustand: {
    background: 'bg-red-100 dark:bg-red-900',
    text: 'text-red-800 dark:text-red-100',
  },
  async: {
    background: 'bg-purple-100 dark:bg-purple-900',
    text: 'text-purple-800 dark:text-purple-100',
  },
};

export function getTagColors(tag: string): TagColor {
  // Normalize tag to match our keys (lowercase, no spaces)
  const normalizedTag = tag.toLowerCase().replace(/\s+/g, '');

  // Return colors for the tag if we have them, or default colors if we don't
  return (
    tagColors[normalizedTag] || {
      background: 'bg-gray-100 dark:bg-gray-800',
      text: 'text-gray-800 dark:text-gray-200',
    }
  );
}
