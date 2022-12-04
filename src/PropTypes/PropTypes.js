import React from 'react';
import PropTypes from 'prop-types'


export function PropTypesTest(props) {
    return (
        <div>
            <ClassBasePropTypes annualSalary={100000} />
            <br />
            <FunctionPropTypes annualSalary={600000} />
        </div>)
}


// ES6 class
class ClassBasePropTypes extends React.Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        annualSalary: 0
    }
    static propTypes = {
        annualSalary: PropTypes.number
    }
    render() {
        return (
            <div>
                class based
                <br />
                Annual Salary: £{this.props.annualSalary}
                <br />
                Monthly Salary: £{this.props.annualSalary / 12}
            </div>)
    }
}

// Functional component
function FunctionPropTypes(props) {
    return (
        <div>
            Function based
            <br />
            Annual Salary: £{props.annualSalary}
            <br />
            Monthly Salary: £{props.annualSalary / 12}
        </div>)
}

FunctionPropTypes.defaultProps = {
    annualSalary: 0
}

FunctionPropTypes.propTypes = {
    annualSalary: PropTypes.number
}

// refer to the tutorial I got this from for more information, I think this tutorial is way easier to follow than the official explanation
//https://blog.bitsrc.io/understanding-react-proptypes-type-checking-in-react-9648a62ce12e