/**
 * Full width image slice component
 */
export const FullWidthImage = ({ slice }) => (
  <section class="full-width-image content-section">
    <img src={slice.primary.image.url} alt="Full width image" />
  </section>
);
