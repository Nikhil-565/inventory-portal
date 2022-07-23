import './App.css';
import Heading from './components/heading';
import Navbar from './components/navbar';
import Review from './components/reviews';
import Subsc from './components/subscription';

export default function App() {
  let l="<"
  let r=">"
  return (
    <div className="App">
      <Heading/>
      <Navbar/>
      <Review/>
      <Subsc/>
    </div>
  );
}
