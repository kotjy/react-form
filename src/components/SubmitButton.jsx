import PropTypes from 'prop-types'

export function SubmitButton ({ handleSubmit }) {
  return (<button className="submit-button" type="button" onClick={handleSubmit}>Submit</button>)
}

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func
}