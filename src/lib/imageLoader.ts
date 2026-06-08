export default function imageLoader({ src }: { src: string; width?: number; quality?: number }) {
  // If it's a remote image, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  const repositoryName = 'GreenBharathFoundation';
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    const prefix = `/${repositoryName}`;
    // Avoid double prefixing
    if (src.startsWith(prefix)) {
      return src;
    }
    // Prepend the repository name for GitHub Pages sub-path
    return `${prefix}${src.startsWith('/') ? src : `/${src}`}`;
  }

  return src;
}
