import Image from "next/image";
import { GOOGLE_TESTIMONIALS, type Testimonial } from "@/data/testimonials";

export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={className ?? "testimonial-card__stars"} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="13" height="13" aria-hidden="true">
          <path
            d="M10 1.3l2.55 5.6 6.15.58-4.63 4.13 1.35 6.04L10 14.86l-5.42 2.79 1.35-6.04-4.63-4.13 6.15-.58L10 1.3z"
            fill={i < rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="testimonial-card">
      <div className="testimonial-card__head">
        <span className="testimonial-card__avatar">
          <Image src={t.avatar} alt={t.name} fill sizes="40px" />
        </span>
        <div>
          <figcaption className="testimonial-card__name">
            {t.name}
            {t.handle && <span className="testimonial-card__handle"> ({t.handle})</span>}
          </figcaption>
          <Stars rating={t.rating} />
        </div>
      </div>
      <blockquote className="testimonial-card__body">&ldquo;{t.text}&rdquo;</blockquote>
      {t.photos && t.photos.length > 0 && (
        <div className="testimonial-card__photos">
          {t.photos.map((src) => (
            <span key={src} className="testimonial-card__photo">
              <Image src={src} alt={`Photo from ${t.name}'s trip`} fill sizes="120px" />
            </span>
          ))}
        </div>
      )}
    </figure>
  );
}

export function TestimonialsMarquee() {
  const loop = [...GOOGLE_TESTIMONIALS, ...GOOGLE_TESTIMONIALS];
  return (
    <div className="testimonials-marquee">
      <div className="testimonial-row">
        <div className="testimonial-row__track">
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
