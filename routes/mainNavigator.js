


import { createSwitchNavigator,createAppContainer } from 'react-navigation'


import AuthStack from './authStack'
import BottomTab from './bottomTab'

const Navigator = createSwitchNavigator({



    BottomTab:{

        screen:BottomTab
    },

   //authStack: {
       // screen: AuthStack
    //}

   

})


const AppContainer=createAppContainer(Navigator)

export default AppContainer;
