import { createStackNavigator} from "react-navigation-stack";
import MyAccount from "../screens/Account/MyAccount";
import login from "../screens/Account/login"
import Register from "../screens/Account/Register"

const AccountScreenStacks = createStackNavigator({

    MyAccount: {
        screen: MyAccount,
        navigationOptions: () => ({
            title: "Mi cuenta"
        })
    },

    Login: {
        screen: login,
        navigationOptions: ()=> ({
            title: "Login"
        })
    },
    Register: {
    screen: Register,
    navigationOptions:() => ({
        title: "Registro de usuario"
    })

}  
})

export default AccountScreenStacks;