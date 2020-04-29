import { createStackNavigator} from "react-navigation-stack";
import Search from "../screens/Search";

const SearchScreenStacks = createStackNavigator({

    TopRestaurants: {
        screen: Search,
        navigationOptions: () => ({
            title: "Busca tus restaurantes"
        })
    }
})

export default SearchScreenStacks;