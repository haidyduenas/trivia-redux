import store from "./store";
import {images,questions,correctAnswers,options, store} from './store'
export const again = (index)=> {
    store.setState ({
        answers : [],
        index : 0,
        complete : false,
        compare:false,
        score: 0
     })
}

export const compare = (index) =>{
    store.setState({
        compare: true
    })
}

export const saveData = (e,value) =>{
    let result = answers;
    result[index] = value;
    store.setState({
      answers: result
    })
    if (index === questions.length - 1) {
        store.setState({
          complete: true
        });
    }   
        store.setState({
            index : index + 1
        })
    if (answers[index] == answer[index]){
            store.setState({
                score : score + 1
            })
        }
}