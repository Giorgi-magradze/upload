
import './App.css';
import useCopyClipboard from './hooks/useCopyClipboard';
import useLocalStorage from './hooks/useLocalStorage';
import usePageBottom from './hooks/usePageBottom';
import useWindowResize from './hooks/useWindowResize';

function App() {
  const [isOpen, toggle] = useLocalStorage('is-Open',false)
   const{isCopied,copy} = useCopyClipboard() 

   const inputRef = useRef();

   const isBottom = usePageBottom();
   const {width , height}= useWindowResize();


  return (
    <div className="App">
      <button onClick={()=>toggle(isOpen =>!isOpen)}>Toggle</button>
    
    {isOpen && <div >Hello world</div>}
    <br/>
    <div>
      <input ref={inputRef} />
      <button onClick={()=>copy(inputRef.current.value)}>copy</button>
       {isCopied && <p>your text was successfully copied</p>}
    </div>
    <div style={{height:3000}}>hello</div>
    </div>
    
  );
}

export default App;
