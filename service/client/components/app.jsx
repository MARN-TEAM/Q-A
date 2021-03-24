import React, {useState ,useEffect} from 'react'
import axios from 'axios'

import SearchBar from './SearchBar.jsx';
import MoreAnswerdQuestions from './MoreAnswerdQuestions.jsx';
import AddQuestions from './AddQuestions.jsx'


const App = () => {
   return(
            <div>
           <SearchBar />
           <div>
                <MoreAnswerdQuestions />  <AddQuestions />
               

           </div>
            </div>
        )
} 

    

    
     
    


export default App;