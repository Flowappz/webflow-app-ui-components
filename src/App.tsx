import {Button} from "./components";
import {IconButton} from "./components";
import {Textarea} from './components';
import {Input} from "./components";
import Spinner from "./components/Spinner/Spinner";
import {Divider} from "./components";
import {Switch} from "./components";

import {Note} from "./components";
import {EmptyState} from "./components";
import {Radio} from "./components";
import ColorInput from "./components/ColorPicker/ColorPicker";
import {SelectInput} from "./components/SelectInput/SelectInput";

import {Avatar} from "./components";
import {AvatarGroup} from "./components/Avatar/Avatar";
import {Checkbox} from "./components/CheckBox/Checkbox";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "./components/Accordion/Accordion";


const content = [
    {
        content: 'option 1',
        value: '1',
    }, {
        content: 'option 2',
        value: '2',
    }, {
        content: 'option 3',
        value: '3',
    },
]


function App() {


    return (
        <div className="App p-5 text-actionPrimaryText">
            <h2 className='text-3xl'>Text Buttons</h2>
            <div className='flex gap-2 mt-5 mb-6'>
                <Button>Label</Button>
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
            <p>vertical</p>
            <Divider direction={'vertical'}/>
            <p>horizontal</p>
            <Divider/>
            <p>lg</p>
            <div className='flex gap-2 mt-5 mb-6'>
                <IconButton variant={'danger'} size={'lg'}></IconButton>
                <IconButton variant={'default'} size={'lg'}></IconButton>
                <IconButton variant={'outline'} size={'lg'}></IconButton>
                <IconButton variant={'primary'} size={'lg'}></IconButton>
                <IconButton variant={'ghost'} size={'lg'}></IconButton>

            </div>

            <h2 className='text-3xl'>Textarea</h2>
            <Textarea placeholder={'text'}/>

            <h2 className='text-3xl'>Text Input</h2>
            <Input placeholder={'text input'}/>

            <h2 className='text-3xl'>Spinner</h2>
            <p>sm</p>
            <Spinner size={'sm'}/>
            <p>lg</p>
            <Spinner size={'lg'}/>


            <h2 className='text-3xl'>Switch</h2>
            <p>Default</p>
            <Switch switchId={'default'}/>

            <p className={'p-4'}>isChecked</p>
            <Switch switchId={'isChecked'} checked/>

            <h2 className='text-3xl'>Note</h2>
            <p className={'p-4'}>Default</p>
            <Note title={'Title'} description={'this is description'} linkLabel={'label'}/>
            <p className={'p-4'}>ghost</p>
            <Note title={'Title'} variant={'ghost'} description={'this is description'} linkLabel={'label'}/>
            <p className={'p-4'}>success</p>
            <Note title={'Title'} variant={'success'} description={'this is description'} linkLabel={'label'}/>
            <p className={'p-4'}>primary</p>
            <Note title={'Title'} variant={'primary'} description={'this is description'} linkLabel={'label'}/>
            <p className={'p-4'}>danger</p>
            <Note title={'Title'} variant={'danger'} description={'this is description'} linkLabel={'label'}/>


            <div className={'bg-[#000] p-7'}>
                <h2 className='text-3xl'>EmptyState</h2>
                <p>Default</p>
                <EmptyState title={'Title'} body={'this is description'} label={'Next'}/>

                <p>isNested</p>
                <EmptyState title={'Title'} isNested body={'this is description'} label={'Next'}/>
            </div>

            <h2 className='text-3xl'>Radio</h2>
            <Radio id={'radio'} label={'label'} checked/>
            <p className={'p-1'}></p>
            <Radio id={'radio2'}/>
            <p className={'p-1'}></p>
            <Radio id={'radio3'} isError/>
            <p className={'p-1'}></p>
            <Radio id={'radio4'} isError checked/>
            <p className={'p-1'}></p>
            <Radio id={'radio4'} checked disabled/>

            <p className={'p-1'}></p>
            <p> Color Picker</p>
            <ColorInput color={'rgb(0,0,0)'} onChange={(color: any) => console.log(color)}/>
            <p className={'p-1'}></p>
            <p>Select Dropdown</p>
            <SelectInput label={'select'} placeholder={'hello'} defaultValue={content[0].value} options={content}
                         onChange={(e: any) => console.log(e.target.value)}/>

            <p>Image Avatar</p>
            <Avatar src={'https://avatars.githubusercontent.com/u/103986313?v=4'} name={'Sakil Ahmed'}/>

            <p>Text Avatar</p>
            <Avatar src={''} name={'Sakil Ahmed'}/>


            <p>Avatar Group</p>
            <AvatarGroup>
                <Avatar src={'https://avatars.githubusercontent.com/u/103986313?v=4'} name={'Sakil Ahmed'}/>
                <Avatar src={''} name={'Sakil Ahmed'}/>
                <Avatar src={'https://avatars.githubusercontent.com/u/103986313?v=4'} name={'Sakil Ahmed'}/>
                <Avatar src={''} name={'Sakil Ahmed'}/>
            </AvatarGroup>


            <p>default</p>
            <Checkbox checkboxId={'defaultcheckbox'}/>
            <p>checked</p>
            <Checkbox checkboxId={'checkbox2'} checked/>
            <p>disabled</p>
            <Checkbox checkboxId={'checkbox1'} disabled/>
            <p>isError</p>
            <Checkbox checkboxId={'checkbox3'} isError/>

 <p>Accordion</p>
            <div className={'w-[240px]'}>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className={'mb-1'}>
                        <AccordionTrigger>Section expanded</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Section collapsed</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    );
}

export default App;
