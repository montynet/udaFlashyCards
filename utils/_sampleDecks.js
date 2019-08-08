import {AsyncStorage} from 'react-native'

export const DECKS_KEY = 'UdacityFlashCards'

let decks = {
  Pokemon: {
    title: 'Pokemon',
    questions: [
      {
        question: 'What is green, small, and has vines?',
        answer: 'Bulbasaur'
      },
      {
        question: 'What is the origin pokemon?',
        answer: 'Mew'
      },
    ]
  },
  ReactNative: {
    title: 'React Native',
    questions: [
      {
        question: 'What is the equivalent of a click event (onClick)?',
        answer: 'onPress'
      },
      {
        question: 'What does react-native provide for styling components?',
        answer: 'Stylesheet api'
      }
    ]
  }
}

function setData() {
  AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
  return decks
}

export function formatDecksResults(results) {
  return results === null ? setData() : JSON.parse(results)
}
