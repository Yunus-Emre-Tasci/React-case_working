
import { useEffect, useState } from "react";



const App=()=>{
  const [items, setItems] = useState([
    {
      key:"",
      value:""
    }
  ])

  const pasteHandle = (e, index) => {
    e.preventDefault()
    const pastedData=e.clipboardData.getData("text")
    if(pastedData){
      const arr=pastedData.split("\n").map(text=>{
        if(/([\w]+)=(.+?)/.test(text)){
          let [key,value] =text.split("=")
          let find=items.find(i=>i.key===key)
          if(!find||find?.key===items[index].key){
            return {
              key,
              value
            }
          }
        }
      }).filter(Boolean)
      if (arr.length > 0) {
        setItems([...items.slice(0,index), ...arr,...items.slice(index+1)])
      }
    }
  }


  
  return(
    <div className="h-[100vh]">
      <div className="container mx-auto py-4">
              {items.map((item,index)=>(
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input placeholder="Örn:API_URL" className="h-10 rounded bg-white/5 border border-white/20 text-sm px-3 py-2 outline-none" type="text" value={item.key}
           onPaste = {
             e => pasteHandle(e,index)
           }
           onChange={e=>{
            setItems(items=>items.map((item,i)=>{
              if(i===index){
                item.key=e.target.value
              }
              return item
            }))
          }} />
          < input className = "h-10 rounded bg-white/5 border border-white/20 text-sm px-3 py-2 outline-none ms-2"
          type = "text"
          value = {
            item.value
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
          {
            items.length > 1 && < button onClick = {
              () => setItems(items.filter((_, key) => index !== key))
            }
            className = "ms-2 rounded" > X </button>}
        </div>
      ))}
      < button onClick = {
        () => setItems(items => [...items, {
          key: "",
          value: ""
        }])
      }
      className = "h-10 px-4 rounded border-blue text-blue flex items-center text-sm mt-3" > Yeni Ekle </button>
      {/* <pre>{JSON.stringify(items,null,2)}</pre> */}
      </div>
    </div>
  )
}

export default App;








