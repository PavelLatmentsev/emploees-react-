import { render } from 'react-dom';
import './emploees-add-form.css';
import { Component } from 'react';
class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
        }
    }
    heandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    headnleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.salary) {
            this.props.addNewPerson({ ...this.state, id: Date.now(), increase: false })
        }
        this.setState({
            name: "",
            salary: "",
        }
        )
    }
    render() {
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex" onSubmit={this.headnleSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        name="name"
                        placeholder="Как его зовут?"
                        value={this.state.name}
                        onChange={this.heandleChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={+this.state.salary}
                        onChange={this.heandleChange} />

                    <button type="submit"
                        className="btn btn-outline-light" >Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;