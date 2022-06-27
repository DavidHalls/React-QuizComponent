import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component{     
    render(){
        const num= this.props.quiz_question.answer_options
        return (
            <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {                
                num.map((n) => <QuizQuestionButton button_text={n} key={n.toString()} value={n} />)
            }         
            
          </ul>
        </section>
      </main>
        )
    }
}
export default QuizQuestion