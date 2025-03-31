import './App.css'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import EmojiGameRoute from './components/EmojiGameRoute'

import RockPaperScissorRoute from './components/RockPaperScissorRoute'

import MemoryMatrixRoute from './components/MemoryMatrixRoute'

import CardFlipMemoryGameRoute from './components/CardFlipMemoryGameRoute'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/emoji-game" component={EmojiGameRoute} />
    <Route exact path="/memory-matrix" component={MemoryMatrixRoute} />
    <Route exact path="/rock-paper-scissor" component={RockPaperScissorRoute} />
    <Route
      exact
      path="/card-flip-memory-game"
      component={CardFlipMemoryGameRoute}
    />
  </Switch>
)

export default App
