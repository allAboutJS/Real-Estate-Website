export default function Input({ register, errors, pattern, errorMessage, name, label, ...otherProps }) {
    return (
        <div className="input-field">
            <label htmlFor={otherProps.id}>{label}</label>
            {register ? (
                <>
                    <input
                        className="min-w-0 bg-slate-100 rounded-lg p-2"
                        {...otherProps}
                        {...register(name, {
                            pattern: {
                                value: pattern,
                                message: "Input is invalid."
                            },
                            required: {
                                value: otherProps.required,
                                message: errorMessage
                            }
                        })}
                    />
                    {errors && errors[name] && (
                        <small className="text-red-600">{errors && errors[name]?.message}</small>
                    )}
                </>
            ) : (
                <input className="min-w-0 bg-slate-100 rounded-lg p-2" name={name} {...otherProps} />
            )}
        </div>
    );
}
