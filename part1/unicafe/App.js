import React, {useState} from 'react';


const Statistic = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    const all = props.good + props.bad + props.neutral
    const average = (props.good + (props.bad*-1))/all
    const positive = (props.good)/all *100
    if(all===0){
        return (
            <p>No feedbacks were given yet by the customers</p>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><Statistic text="good"  /></td>
                        <td><Statistic text=":"value={props.good} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="neutral"  /></td>
                        <td><Statistic text=":"value={props.neutral} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="bad"  /></td>
                        <td><Statistic text=":"value={props.bad}/></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Total" /></td>
                        <td><Statistic text=":"value={all} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Average " /></td>
                        <td><Statistic text=":"value={average}  /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Positivity" /></td>
                        <td><Statistic text=":"value={positive} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.event}>{props.text}</button>
    )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    
    return (
        <div>
            <h1> "WELCOME!! TO THE WORLD OF UNICAFE"</h1>
            <h3> To our Dearest Customer, Please give your valuable feedback :</h3>
            <div>
                <Button event={()=> setGood(good+1)} text="good" />
                <Button event={()=> setNeutral(neutral+1)} text="neutral" />
                <Button event={()=> setBad(bad+1)} text="bad" />
                                
            </div>
            <br></br>
            <h3>The Statistics for the provided feedback are shown below</h3>
            <Statistics good={good} bad ={bad} neutral={neutral} />
        </div>
    )
}



export default App
