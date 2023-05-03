import './form-input.styles.scss';

const FormInput = ({label, ...inputOptions}) => {
    console.log("####################################" + JSON.stringify(inputOptions));
    return (
        <div className="group">
            <input className="form-input" {...inputOptions}/>
         
            {label && (
            <label className={`${inputOptions.value ? 'shrink' : ''} form-input-label`}>{label}</label>
            )}
        </div>
    );
};

export default FormInput;