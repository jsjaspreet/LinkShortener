import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux"
import CircularProgress from 'material-ui/CircularProgress'
import TextField from 'material-ui/TextField'
import * as actions from '../actions/index'
import RaisedButton from 'material-ui/RaisedButton'


class UrlInput extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderURLField = this.renderURLField.bind(this)
    this.state = { url: "" }
  }

  handleChange(event) {
    const url = event.target.value
    this.setState({ url })
  }


  renderURLField({ value }) {
    return <TextField onChange={this.handleChange}
                      value={value}
                      floatingLabelText="Link to Shorten"/>
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.submitURL(this.state.url)
    this.setState({ url: "" })
  }

  render() {
    const { isFetching } = this.props
    const SubmitButton = <RaisedButton type="submit" label="Shorten" primary={true} style={{ margin: 12 }}/>
    const LoadingComponent = <CircularProgress />


    return (
      <div style={{
        textAlign: 'center',
        marginBottom: 50
      }}
      >
        <form onSubmit={this.handleSubmit}>
          <Field name="link" component={this.renderURLField} props={{ value: this.state.url }}/>
          <br/>
          {
            isFetching ?
            LoadingComponent :
            SubmitButton
          }
        </form>
      </div>
    )
  }
}

UrlInput.propTypes = {
  isFetching: PropTypes.bool,
  submitURL: PropTypes.func
}


const wrappedUrlInput = reduxForm({
  form: 'urlForm' // a unique name for this form
})(UrlInput)

const mapStateToProps = ({ form, isFetching }) => ({
  urlForm: form.urlForm,
  isFetching
})

export default connect(mapStateToProps, actions)(wrappedUrlInput)
