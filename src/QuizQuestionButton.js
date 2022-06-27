import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'

class QuizQuestionButton extends Component{

    render(){
        return(
            <li><button>{this.props.button_text}</button></li>
        )
    }
}
export default QuizQuestionButton