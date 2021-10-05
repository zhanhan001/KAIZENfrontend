import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = { employees: [] };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        Auth.currentSession().then(res => {
            fetch('/api/employees', {
                headers: {
                    'Authorization': 'Bearer ' + res.getIdToken().getJwtToken()
                }
            })
                .then(response => response.json())
                .then(data => this.setState({ employees: data }))
                .then(console.log(this.state.employee));
        })
    }

    async remove(workId) {
        await Auth.currentSession().then(res => {
            fetch(`/api/employees/${workId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                let updatedEmployees = [...this.state.employees].filter(i => i.workId !== workId);
                this.setState({ clients: updatedEmployees });
                window.location.reload();
            });
        })
    }

    render() {
        const { employees, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const employeeList = employees.map(employee => {
            return <tr key={employee.workId}>
                <td style={{ whiteSpace: 'nowrap' }}>{employee.name}</td>
                <td>{employee.email}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/employees/" + employee.workId}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(employee.workId)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <Table className="mt-4">
                <thead>
                    <tr>
                        <th width="30%">Name</th>
                        <th width="30%">Email</th>
                        <th width="40%">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList}
                    {console.log(this.state.employees)}
                </tbody>
            </Table>

        );
    }
}
export default EmployeeList;