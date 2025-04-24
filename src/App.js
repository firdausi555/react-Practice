import Greeting from './Greeting';
import Counter from './Counter';
import RandomUser from './RandomUser';
function App() {
  return (
    <div>
      <h1>Hey, I'm learning React! 💪</h1>
      <Greeting name ="sabil"/>
      <Greeting name="Alex" />
      <Greeting name="Taylor" />
      <Greeting name="Sky" />
      <Counter/>
      <RandomUser/>
</div>
  );
}


export default App;