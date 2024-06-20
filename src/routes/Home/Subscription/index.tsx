import Card from "../../../components/Header/Card";
import Button from "../../../components/Header/Button";
import { Link } from "react-router-dom";

export default function Subscription() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt30 mb30">
            <Card title="Página de inscrição" />
          </div>
          <div className="dflex">
            <Link to="/Promotion">
              <Button text="Ver promoção" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
