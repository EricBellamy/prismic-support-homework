import React from "react";
import { RichText } from 'prismic-dom';
import { PrismicText } from "@prismicio/react";

/**
 * Quote slice component
 */
export const Quote = ({ slice }) => (
  <section class="content-section quote">
    <blockquote>
      <PrismicText field={slice.primary.quote} />
    </blockquote>
  </section>
);
