import { createStackNavigator} from "react-navigation-stack";
import TopRestaurants from "../screens/TopRestaurants";

const TopListScreenStacks = createStackNavigator({

    TopRestaurants: {
        screen: TopRestaurants,
        navigationOptions: () => ({
            title: "Los mejores restaurantes"
        })
    }
})

export default TopListScreenStacks;