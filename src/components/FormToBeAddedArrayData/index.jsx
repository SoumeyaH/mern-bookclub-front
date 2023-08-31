const ArrayData = ({stateData, setState, heading}) => {
   
  return (
       <div>
          <h4>{heading}</h4>

          {stateData.length === 0 && <p>nothing being added</p>}
          {stateData.map(item => {
              return <div key={item.id}>
              <p >{item.title}</p>
              <button onClick={() => {
                  setState((state) => state.filter((stateData) => stateData.id !== item.id))
                  
                }}>undo</button>
            </div>
          })}
        </div> 
  )
}

export default ArrayData

