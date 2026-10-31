/**
 * STEP 02 will be the full About Us section. This is a short, source-based
 * placeholder, so the sticky hero's layering can already be observed on scroll.
 */
export default function AboutUs() {
  return (
    <section className="relative z-10 bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-8 sm:px-11">
        <p className="mx-auto max-w-5xl text-4xl leading-tight tracking-tight">
          <strong>We will help you ship better apps, faster.</strong>{" "}
          Our team of expert engineers has created the best user experiences
          in some of the most popular apps worldwide.
        </p>
      </div>
    </section>
  );
}
