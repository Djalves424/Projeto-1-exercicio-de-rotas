import Card from "../../../components/Header/Card";
import Button from "../../../components/Header/Button";

export default function Promotion() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt30 mb30">
            <Card title="Página de promoção" />
          </div>
          <div className="dflex">
            <Button text="Quero participar" />
          </div>
        </div>
      </section>
    </main>
  );
}