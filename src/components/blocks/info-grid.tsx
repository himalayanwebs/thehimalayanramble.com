export interface InfoCardData {
  title: string;
  body: string;
}

export function InfoGrid({ cards }: { cards: InfoCardData[] }) {
  return (
    <div className="info-grid">
      {cards.map((card) => (
        <div key={card.title} className="info-card">
          <h4>{card.title}</h4>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
}
