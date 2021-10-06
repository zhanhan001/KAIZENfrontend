import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Auth } from 'aws-amplify';

class EmployeeEdit extends Component {

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const employee = await (await Auth.currentSession().then(res => {
                return fetch(`/api/employees/${this.props.match.params.id}`, {
                    headers: {
                        'Authorization': 'Bearer ' + res.getIdToken().getJwtToken()
                    }
                })
            })).json();
            this.setState({ item: employee });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await Auth.currentSession().then(res => {
            fetch('/api/employees' + (item.id ? '/' + item.id : ''), {
                method: (item.id) ? 'PUT' : 'POST',
                headers: {
                    'Authorization': 'Bearer ' + res.getIdToken().getJwtToken(),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            });
            console.log(JSON.stringify(item));
        });

        this.props.history.push('/employees');
        //window.location.reload();
    }

    emptyItem = {
        workId: '',
        name: '',
        email: '', 
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        const { item } = this.state;
        const title = <h2>{item.workid ? 'Edit Employee' : 'Add Employee'}</h2>;

        return <div>
            <AppNavbar />
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="workid">id</Label>
                        <Input type="text" name="workId" id="workId" value={item.workId || ''}
                            onChange={this.handleChange} autoComplete="workId" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                            onChange={this.handleChange} autoComplete="name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email"  value={item.email || ''}
                            onChange={this.handleChange} autoComplete="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="employeeRole">EmployeeRole</Label>
                        <Input type="text" name="employeeRole" id="employeeRole" value={item.employeeRole || ''}
                            onChange={this.handleChange} autoComplete="employeeRole" />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="passportNumber">PassportNumber</Label>
                        <Input type="text" name="passportNumber" id="passportNumber" value={item.passportNumber|| ''}
                            onChange={this.handleChange} autoComplete="passportNumber" />
                    </FormGroup>
                   
                    <FormGroup>
                        <Label for="workPermitNumber">workPermitNumber</Label>
                        <Input type="text" name="workPermitNumber" id="workPermitNumber" value={item.workPermitNumber|| ''}
                            onChange={this.handleChange} autoComplete="workPermitNumber" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="levy">levy</Label>
                        <Input type="text" name="levy" id="levy" value={item.levy|| ''}
                            onChange={this.handleChange} autoComplete="levy" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="workPermitDateOfIssue">workPermitDateOfIssue</Label>
                        <Input type="date" name="workPermitDateOfIssue" id="workPermitDateOfIssue" value={item.workPermitDateOfIssue || ''}
                                onChange={this.handleChange} autoComplete="workPermitDateOfIssue" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="workPermitExpiryDate">workPermitExpiryDate</Label>
                        <Input type="date" name="workPermitExpiryDate" id="workPermitExpiryDate" value={item.workPermitExpiryDate || ''}
                                onChange={this.handleChange} autoComplete="workPermitExpiryDate" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="workContactNumber">workContactNumber</Label>
                        <Input type="text" name="workContactNumber" id="workContactNumber" value={item.workContactNumber || ''}
                                onChange={this.handleChange} autoComplete="workContactNumber" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="workSiteLocation">workSiteLocation</Label>
                        <Input type="text" name="workSiteLocation" id="workSiteLocation" value={item.workSiteLocation|| ''}
                            onChange={this.handleChange} autoComplete="workSiteLocation" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="singaporeAddress">singaporeAddress</Label>
                        <Input type="text" name="singaporeAddress" id="singaporeAddress" value={item.singaporeAddress|| ''}
                            onChange={this.handleChange} autoComplete="singaporeAddress" />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="vaccStatus">vaccStatus</Label>
                        <Input type="text" name="vaccStatus" id="vaccStatus" value={item.vaccStatus|| ''}
                            onChange={this.handleChange} autoComplete="vaccStatus" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="covidResult">covidResult</Label>
                        <Input type="text" name="covidResult" id="covidResult" value={item.covidResult|| ''}
                            onChange={this.handleChange} autoComplete="covidResult" />
                    </FormGroup>
                    
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/tables">Cancel</Button>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(EmployeeEdit);