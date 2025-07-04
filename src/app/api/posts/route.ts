import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog', 'en');

function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
}

export async function GET() {
  try {
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      const slug = data.slug || filename.replace(/\.mdx?$/, '');
      const date = data.date || data.publishedAt;

      // Validate date and use current date as fallback if invalid
      const validDate = isValidDate(date) ? date : new Date().toISOString().split('T')[0];

      return {
        title: data.title || slug,
        slug,
        date: validDate,
        url: `/en/blog/${slug}`,
      };
    });

    const sorted = posts
      .filter(p => !!p.title && !!p.slug)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(sorted.slice(0, 5));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
