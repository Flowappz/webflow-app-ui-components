import {Button} from "./components";
import {IconButton} from "./components/IconButton/IconButton";


function App() {


    return (
        <div className="App p-5 text-actionPrimaryText">


            <h2 className='text-3xl'>Text Buttons</h2>
            <div className='flex gap-2 mt-5 mb-6'>
                <Button >Label</Button>
                <Button variant={'primary'}>Label</Button>
                <Button variant={'outline'}>Label</Button>
                <Button variant={'danger'}>Label</Button>
                <Button variant={'ghost'}>Label</Button>

            </div>


            <h2 className='text-3xl'>Icon Buttons</h2>
            <p>sm</p>
            <div className='flex gap-2 mt-5 mb-6'>
                <IconButton variant={'danger'} size={'sm'}></IconButton>
                <IconButton variant={'default'} size={'sm'}></IconButton>
                <IconButton variant={'outline'} size={'sm'}></IconButton>
                <IconButton variant={'primary'} size={'sm'}></IconButton>
                <IconButton variant={'ghost'} size={'sm'}></IconButton>

            </div>
            <p>lg</p>
            <div className='flex gap-2 mt-5'>
                <IconButton variant={'danger'} size={'lg'}></IconButton>
                <IconButton variant={'default'} size={'lg'}></IconButton>
                <IconButton variant={'outline'} size={'lg'}></IconButton>
                <IconButton variant={'primary'} size={'lg'}></IconButton>
                <IconButton variant={'ghost'} size={'lg'}></IconButton>

            </div>
        </div>
    );
}

export default App;
