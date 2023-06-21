import Task from "./Task";
export default function TaskList(){


        return(
             <div>
                <input type="text" name="todo app" id="que hago?"/> 
                <ul>
                    <li><Task/>Buy a new laptop</li>
                     <li><Task/>Complete a previous task</li>
                    <li><Task/>Create video for Youtube</li>
                    <li><Task/>Create a new portafolio site</li>
                 </ul>
            </div>

           
        );


}


