import StarRating from "./components/StarRating";
import Progressbar from "./components/ProgressBar";

function App() {
const progressData=[15,40,50,75,100]
  return (
    <div>
      <StarRating />
      <h2>Progress Bar</h2>
      {
        progressData.map((data, index) =>{
          return <Progressbar key={index} progress={data}/>
        })
      }
    </div>
  )
}

export default App
