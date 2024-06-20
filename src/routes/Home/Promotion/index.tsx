import Card from "../../../components/Header/Card";
import Button from "../../../components/Header/Button";
import { Link } from "react-router-dom";

export default function Promotion() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt30 mb30">
            <Card title="Página de promoção" />
          </div>
          <div className="dflex">
            <Link to="/sub">
              <Button text="Quero participar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
