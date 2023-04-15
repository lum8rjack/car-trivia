import { convertQuestion } from "./Questions";


function QuestionType(props) {
    if(props.type === "multiple") {
        return (
            <>
                <p><b>A.</b> {convertQuestion(props.options[0])}</p>
                <p><b>B.</b> {convertQuestion(props.options[1])}</p>
                <p><b>C.</b> {convertQuestion(props.options[2])}</p>
                <p><b>D.</b> {convertQuestion(props.options[3])}</p>
            </>
        );
    } else {
        return (
            <>
                <p><b>True</b></p>
                <p><b>False</b></p>
            </>
        );
    }
}

export default QuestionType;