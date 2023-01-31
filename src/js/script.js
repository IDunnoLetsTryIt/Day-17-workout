import { ProgressBar } from './ProgressBar';

// @TODO no.1
//    create new instance of ProgressBar.
//    Explore ProgressBar class, but the constructor does not need any parameter.
//    Take a body element (document.body) and append progress bar element to it.
//    Progress bar element was created in the constructor of PB
//    and it is available as a property "element" of the object you created.
//
//    code here:
const Progress=new ProgressBar(5)
const Progres=new ProgressBar(6)   
const Progre=new ProgressBar(589)   
const Progr=new ProgressBar(-1)   

const body=document.body;
body.appendChild(Progress.element)
body.appendChild(Progre.element)
body.appendChild(Progres.element)
body.appendChild(Progr.element)





// @TODO no.2 once you have done TODO no.1 and you can see the progress bar,
//    fix missing icon on plus button
