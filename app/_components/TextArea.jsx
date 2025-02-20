export default function TextArea({ register, errors, name, label, validations, ...otherProps }) {
    return (
        <div className="input-field">
            <label htmlFor={otherProps.id}>{label}</label>
            {register ? (
                <textarea
                    className="min-w-0 bg-slate-100 rounded-sm p-2 min-h-20"
                    {...otherProps}
                    {...register(name, validations)}
                ></textarea>
            ) : (
                <textarea
                    className="min-w-0 bg-slate-100 rounded-sm p-2 min-h-20"
                    {...otherProps}
                    name={name}
                ></textarea>
            )}
            {errors["message"] && <small className="text-red-600">{errors["message"]?.message}</small>}
        </div>
    );
}
