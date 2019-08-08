import React from 'react'
import {View} from 'react-native'
import {createStore} from 'redux'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckLists from './components/DeckLists'
import Deck from './components/Deck'
import Question from './components/Question'
import {white, black} from './utils/colors'
import reducer from './reducers'
import {Provider} from 'react-redux'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import {setLocalNotification} from './utils/helpers'
import CustomStatusBar from "./components/CustomStatusBar";

const store = createStore(reducer)

const Tabs = createBottomTabNavigator({
  DeckLists: {
    screen: DeckLists,
    navigationOptions: {
      tabBarLabel: 'DECKS'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'ADD DECK'
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: black,
    labelStyle: {
      fontSize: 20,
      paddingBottom: 10,
      fontWeight: 'bold',
    }
  }
})

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  AddDeck: {
    screen: AddDeck
  },
  AddCard: {
    screen: AddCard
  },
  Deck: {
    screen: Deck
  },
  Question: {
    screen: Question
  }
}, {
  navigationOptions: {
    headerTintColor: black,
    headerTitleStyle: {
      fontSize: 22,
    }
  },
  cardStyle: {
    backgroundColor: white
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <CustomStatusBar backgroundColor={black} barStyle="light-content"/>
          <Stack/>
        </View>
      </Provider>
    )
  }
}


