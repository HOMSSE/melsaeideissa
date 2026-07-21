import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "profile" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://melsaeideissa.com";
const DEFAULT_TITLE =
  "Mohamed Eissa | Control Systems Engineer — DCS, SIS, SCADA";
const DEFAULT_DESC =
  "Mohamed Eissa — Senior Control Systems Engineer. 11+ years across Methanex, Schneider Electric & Advansys. DCS, SIS, SCADA, Functional Safety. Innovation Award 2025.";

export const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical = SITE_URL + "/",
  image = SITE_URL + "/og-image.jpg",
  type = "profile",
  jsonLd,
}: SEOProps) => {
  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
