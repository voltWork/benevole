import { createNativeStackNavigation } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import {  } from 'components/Navigation_index.js'
import { LOGIN_SCREEN } from './components/Navigation_index';

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Text>Navigation</Text>
        </NavigationContainer>
    )
}
const BasedStack = createNativeStackNavigation();

const BasedStackSrceen = () => {
    return (
        <BasedStack.Navigator>
            <BasedStack.Screen name={REGISTRATION_SCREEN} component={Registration} />
            <BasedStack.Screen name={LOGIN_SCREEN} component={Login} />
            <BasedStackStack.Screen name={START_SCREEN} component={Start}/>
        </BasedStack.Navigator>

    );
};
