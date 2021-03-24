import React, {useState ,useEffect} from 'react'

const addQuestion = () => {
    const [addQuestion, setaddQuestion] = useState("")



    const addQuestion = () => {setAddQuestions(addQuestion +1 )}

        
    useEffect(() => {

    },[])


    return (
         <div className="btn-add" onClick={addQuestion}>
            <button className="AddQuestions">
                ADD A QUESTION
               <i id="adding" className="plus icon"></i>
                    
                 </button>
        </div>
    )
}
export default AddQuestions
