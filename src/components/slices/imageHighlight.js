import { PrismicRichText, PrismicText, PrismicLink, PrismicImage } from "@prismicio/react";

/**
 * Image highlight slice component
 */
export const ImageHighlight = ({ slice }) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.headline} />
      <p>
        <PrismicLink field={slice.primary.link}>
          <PrismicText field={slice.primary.link_label} />
        </PrismicLink>
      </p>
    </div>
    <div className="highlight-right">
	  <PrismicImage field={slice.primary.highlighted_image} />
    </div>
  </section>
);
