import Greeting from './Greeting';
import Counter from './Counter';
import RandomUser from './RandomUser';
import Clock from './Clock';
import TimeoutExample from './TimeoutExample';
function App() {
  return (
    <div>
      <h1>Hey</h1>
      <Greeting name ="sabil"/>
      <Greeting name="Alex" />
      <Greeting name="Taylor" />
      <Greeting name="Sky" />
      <Counter/>
      <RandomUser/>
      <Clock/>
      <TimeoutExample/>
</div>
  );
}


export default App;