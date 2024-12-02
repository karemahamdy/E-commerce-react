import Creadtedby from "./Creadtedby";
import Newsletter from "./Newsletter";
import ShoppingList from "./ShoppingList";
import ServicesList from "./ServicesList";
import FooterLogo from "./FooterLogo";

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">

        <FooterLogo/>
        <ShoppingList />  
        <ServicesList/>
        <Newsletter />
        
      </div>

      <Creadtedby />
    </footer>
  );
};
