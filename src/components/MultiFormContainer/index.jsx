import { useState } from "react"


const MultiFormContainer = ({forms, handleSubmit}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const next = () => {
    setCurrentStepIndex(i => {
      if (i >= forms.length - 1) return i
      return i + 1
    })
  }

  const back = () => {
    setCurrentStepIndex(i => {
      if (i <= 0) return i
      return i - 1
    })
  }


  return (
    <>
    <div>
      <div>
          {currentStepIndex + 1} / {forms.length}
      </div>
      
      <div>
          {currentStepIndex !== 0 && <button onClick={back}>back</button>}

          {currentStepIndex !== forms.length - 1 ? <button onClick={next}>next</button> : <button onClick={handleSubmit}>submit</button>}
  
        </div>

        {forms[currentStepIndex]}
    </div>
    </>
  )
}


export default MultiFormContainer