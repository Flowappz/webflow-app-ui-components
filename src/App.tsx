
import {Button} from "./components";


function App() {


    return (
        <div className="App p-5 ">
            <p>Default</p>
        <div className='flex gap-2 mt-5'>
            <Button variant={'ghost'}>
                Label
            </Button> <Button variant={'default'}>
                Label
            </Button> <Button variant={'danger'}>
                Label
            </Button> <Button variant={'primary'}>
                Label
            </Button> <Button variant={'outline'}>
                Label
            </Button>


        </div>
        </div>
    );
}

export default App;
