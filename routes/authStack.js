import Welcome from '../Screens/Welcome'
import Login from '../Screens/Login'
import Signup from '../Screens/SignUp'
import {createStackNavigator} from 'react-navigation-stack'



export default AuthStack=createStackNavigator({


    Welcome:{

        screen:Welcome
    },
    Login:{

        screen:Login

    },
    SignUp:{

        screen:Signup

    },

 

})