import CardList from './components/CardList'
import { AppTitle, AppWrapper } from './styled'

const App = (): JSX.Element => {
  return (
    <AppWrapper>
      <AppTitle>Объявления</AppTitle>
      <CardList />
    </AppWrapper>
  )
}

export default App
