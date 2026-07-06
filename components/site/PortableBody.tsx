import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor, type ImageSource } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => (
      <h2 className="mt-12 font-display text-3xl leading-tight text-ink first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 font-display text-2xl leading-snug text-ink">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-clay pl-5 font-display text-2xl leading-snug text-teal">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-6 marker:text-clay">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 list-decimal space-y-2 pl-6 marker:text-clay">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-teal underline underline-offset-2 hover:text-teal-deep"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const v = value as { asset?: { _ref?: string }; alt?: string };
      if (!v.asset?._ref) return null;
      return (
        <span className="relative my-8 block aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
          <Image
            src={urlFor(v as unknown as ImageSource).width(1400).auto("format").url()}
            alt={v.alt || ""}
            fill
            sizes="(max-width:1024px) 100vw, 48rem"
            className="object-cover"
          />
        </span>
      );
    },
  },
};

export function PortableBody({
  value,
  className = "space-y-5 text-lg leading-relaxed text-ink/90",
}: {
  value: unknown[];
  className?: string;
}) {
  return (
    <div className={className}>
      <PortableText value={value as never} components={components} />
    </div>
  );
}
