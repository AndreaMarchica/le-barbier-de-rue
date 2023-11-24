import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Homepage from "../screens/Homepage";

const RootDrawerNavigator = createDrawerNavigator({
  Home: { screen: Homepage },
  Prenotazione: { screen: Prenotazione },
  Shop: { screen: Shop },
  Contatti: { screen: Contatti },
});
export default createAppContainer(RootDrawerNavigator);
