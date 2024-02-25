import './App.css';
import Hero from './components/Hero/Hero';
import Program from './components/Programs/program';
import Reasons from './components/Reasons/Reason';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials'
import Join from './components/Join/Join';

function App() {
  return (
    <div className="App">
          <Hero />
          <Program/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
    </div>
  );
}

export default App;
