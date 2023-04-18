import { Component } from 'react';
//import './employees-add-form.css';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length >= 3 && this.state.salary >= 300) {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({ name: '', salary: '' });
    } else {
      console.log(
        'Please enter a valid name (more than 3 letters) or salary (>=300)'
      );
      return;
    }
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Додати нового працівника</h3>
        <form className="add-form d-flex" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-contr
            {name, salary} = this.state;ol new-post-label"
            placeholder="Ім'я працівника"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            Додати
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
