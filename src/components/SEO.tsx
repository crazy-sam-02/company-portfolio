import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  author?: string;
  siteName?: string;
}

export function SEO({
  title = "Prionex | IoT, AI/ML, Web & Mobile App Development Projects for Students & Professionals",
  description = "Prionex builds innovative IoT, AI/ML, web and mobile app development projects for students and professionals. Get full project development, documentation, PPT, and viva support in India.",
  keywords = "Prionex, IoT projects, AI projects, machine learning, web app development, mobile app development, final year projects, student projects, project development India, React, Python, embedded systems",
  url = "https://prionex.dev/",
  image = "https://prionex.dev/prionex-logo.png",
  type = "website",
  author = "Prionex",
  siteName = "Prionex",
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#7c3aed" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image:alt" content="Prionex logo" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content="Prionex logo" />
      
      <link rel="canonical" href={url} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteName,
          url,
          logo: image,
          description,
          foundingDate: "2023",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
            addressRegion: "Tamil Nadu",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            telephone: "+91-9677899180",
            email: "prionex.dev@gmail.com",
          },
          sameAs: [
            "https://www.instagram.com/prionex_global?igsh=anM0Y2ZneHJyMWd3",
            "https://www.linkedin.com/in/prionex-undefined-340201395/",
            "https://github.com/prionex2025-hue",
          ],
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteName,
          url,
          description,
          potentialAction: {
            "@type": "SearchAction",
            target: `${url}?search={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        })}
      </script>
    </Helmet>
  );
}
