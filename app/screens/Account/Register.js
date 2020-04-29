import React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {StyleSheet, View, Image, Text} from "react-native"
import RegisterForm from "../../components/Account/RegisterForm"


export default function Register () {

return (

<KeyboardAwareScrollView>
    <Image 
        source= {require ("../../../assets/images/libreria.jpg")}
        
        style= {styles.logo}
        resizeMode= "contain"
        
        />

        <View style ={styles.viewForm}>

         <RegisterForm />

        </View>
</KeyboardAwareScrollView>

);
}

const styles = StyleSheet.create ({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20
    },
    viewForm: {
        marginRight: 40,
        marginLeft: 40,
    }
})