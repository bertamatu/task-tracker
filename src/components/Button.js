import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return <button className='btn' style={{ backgroundColor: color }} onClick={onClick}>{ text }</button>
}

Button.defaultProps = {
    color: 'salmon',
}

Button.prototypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
