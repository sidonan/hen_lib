import './index.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {Typography} from "./components/Typography";
import {Heading} from "./components/Heading";
import {Tooltip} from "./components/Tooltip";
import {Accordion} from "./components/Accordion";

function App() {
  return (
    <div className="app">  
      <div className="app-buttons" >
        <Button variant="bordered" size='lg' >Button</Button>
        <Button variant="bordered" >Button</Button>
        <Button variant="bordered" size="sm">Button</Button>
        <Button >Button</Button></div>

      <div className='app-inputs'>
        <Input label="Name"></Input>
        <Input label="Name"></Input>
        <Input danger label="Name"></Input>
      </div>
      <div className='app-typography'>
        
        <Typography textSize="sm">
          SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>

       
        <Typography textSize="md">
          MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>


        <Typography textSize="lg">
          LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
   
      </div>
        <div className='app-heading'>
          <Heading level={1}>H1. Heading</Heading>
          <Heading level={2}>H2. Heading</Heading>
          <Heading level={3}>H3. Heading</Heading>
          <Heading level={4}>H4. Heading</Heading>
          <Heading level={5}>H5. Heading</Heading>
          <Heading level={6}>H6. Heading</Heading>
        </div>

        <div className='app-tooltip'>
          <Tooltip text="I am a tooltip" position="top">
          <span>Top Tooltip</span>
          </Tooltip>

          <Tooltip text="I am a tooltip" position="left">
            <span>Left Tooltip</span>
          </Tooltip>

        
          <Tooltip text="I am a tooltip" position="right">
            <span>Right Tooltip</span>
          </Tooltip>

         
          <Tooltip text="I am a tooltip" position="bottom">
            <span>Bottom Tooltip</span>
          </Tooltip>
        </div>
        <div className='app-accordion'>
          <Accordion title="Accordion" defaultOpen={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Accordion>
        </div>

    </div>
  );
}

export default App;
