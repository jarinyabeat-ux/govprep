type JsonLdProps = {
  /** A schema.org object, or an array of them, serialised into one script tag. */
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
};

/**
 * Renders structured data. Server component — the JSON ships in the initial
 * HTML, so crawlers never need to execute JavaScript to read it.
 */
export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // Serialised on the server from local, trusted data only.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
