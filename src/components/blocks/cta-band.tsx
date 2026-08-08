export function CtaBand({
  heading,
  actions,
  background,
}: {
  heading: string;
  actions: React.ReactNode;
  background?: React.ReactNode;
}) {
  return (
    <section className="cta-band">
      {background && (
        <div className="cta-band__bg" aria-hidden="true">
          {background}
        </div>
      )}
      <div className="container cta-band__inner">
        <h2 className="h2">{heading}</h2>
        <div className="cta-band__actions">{actions}</div>
      </div>
    </section>
  );
}
