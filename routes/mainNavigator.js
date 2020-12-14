


import { createSwitchNavigator,createAppContainer } from 'react-navigation'


import AuthStack from './authStack'
import BottomTab from './bottomTab'

const Navigator = createSwitchNavigator({

    authStack: {
        screen: AuthStack
    },

    BottomTab:{

        screen:BottomTab
    },

   

   

})


const AppContainer=createAppContainer(Navigator)

export default AppContainer;
