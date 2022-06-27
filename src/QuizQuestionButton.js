import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'

class QuizQuestionButton extends Component{

    render(){
        return(
            <li><button>{QuizQuestion.QuizQuestionButton}</button></li>
        )
    }
}
export default QuizQuestionButton