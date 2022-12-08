
import { useState } from "react";



const App=()=>{
  const [items, setItems] = useState([
    {
      key:"",
      value:""
    }
  ])
  return(
    <div className="h-[100vh]">
      <div className="container mx-auto py-4">
              {items.map((item,index)=>(
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input placeholder="Örn:API_URL" className="h-10 rounded bg-white/5 border border-white/20 text-sm px-3 py-2 outline-none" type="text" value={items.key}
           onPaste={e=>{
            e.preventDefalt()
            e.clipboardData.getData("text")
           }}
           onChange={e=>{
            setItems(items=>items.map((item,i)=>{
              if(i===index){
                item.key=e.target.value
              }
              return item
            }))
          }} />
          < input className = "h-10 rounded bg-white/5 border border-white/20 text-sm px-3 py-2 outline-none"
          type = "text"
          value = {
            items.value
          }
          onChange={e=>{
            setItems(items=>items.map((item,i)=>{
              if(i===index){
                item.value=e.target.value
              }
              return item
            }))
          }}
          />
        </div>
      ))}
      < button onClick = {
        () => setItems(items => [...items, {
          key: "",
          value: ""
        }])
      }
      className = "h-10 px-4 rounded border-blue text-blue flex items-center text-sm mt-3" > Yeni Ekle </button>
      <pre>{JSON.stringify(items,null,2)}</pre>
      </div>
    </div>
  )
}

export default App;








